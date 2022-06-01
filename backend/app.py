from flask import Flask, redirect, url_for, request, jsonify
from flask_cors import CORS, cross_origin
import pprint

from models.recommendation import recommendation

app = Flask(__name__)
CORS(app, resources={r"/get_recommended_art_supplies": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'

ART_TYPES = ['writing', 'crafting', 'sketching', 'painting']

test_answer = {
    'compact': '0',
    'preferred_art_types': ['crafting', 'sketching', 'painting'],
    'likes_experimenting': '0',
    'messy': '0',
    'together': '1',
    'safe_bet': '1'
}

test_response = {'compact': '2',
                 'crafting': True,
                 'likesExperimenting': '0',
                 'messy': '0',
                 'painting': True,
                 'safeBet': '1',
                 'sketching': False,
                 'step': 1,
                 'together': '2',
                 'writing': False}


def parse_response(response):
    print(response)
    test_answer = {
        'compact': response['compact'],
        'preferred_art_types': [art_type for art_type in ART_TYPES if response[art_type] == True],
        'likes_experimenting': response['likesExperimenting'],
        'messy': response['messy'],
        'together': response['together'],
        'safe_bet': response['safeBet']
    }
    return test_answer


@app.route('/get_recommended_art_supplies', methods=['GET', 'POST'])
@cross_origin()
def get_recommended_art_supplies():
    if request.method == 'POST':
        response_data = request.get_json()
        parsed_response = parse_response(response_data)
        rec = recommendation(parsed_response)
        rec.get_recommended_groups()
        return {key: val.attributes for (key, val) in rec.recommended_art_supplies.items()}


if __name__ == '__main__':
    app.run('0.0.0.0', 80,
            ssl_context=('/etc/letsencrypt/live/i-need-art-supplies-help.pasten.life/fullchain.pem',
                         '/etc/letsencrypt/live/i-need-art-supplies-help.pasten.life/privkey.pem'))
