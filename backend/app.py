from flask import Flask, redirect, url_for, request, jsonify
from flask_cors import CORS, cross_origin

from models.recommendation import recommendation

app = Flask(__name__)
CORS(app, resources={
    r"/get_recommended_art_supplies": {"origins": "*"},
    r"/get_all_art_supplies_filenames": {"origins": "*"},
})
app.config['CORS_HEADERS'] = 'Content-Type'

ART_TYPES = ['writing', 'crafting', 'sketching', 'painting']

def parse_response(response):
    print(response)
    parsed_response = {
        'compact': response['compact'],
        'preferred_art_types': [art_type for art_type in ART_TYPES if response[art_type] == True],
        'likes_experimenting': response['likesExperimenting'],
        'messy': response['messy'],
        'together': response['together'],
        'safe_bet': response['safeBet']
    }
    return parsed_response


@app.route('/get_recommended_art_supplies', methods=['POST'])
@cross_origin()
def get_recommended_art_supplies():
    if request.method == 'POST':
        response_data = request.get_json()
        parsed_response = parse_response(response_data)
        rec = recommendation(parsed_response)
        rec.get_recommended_groups()
        return {key: val.attributes for (key, val) in rec.recommended_art_supplies.items()}


@app.route('/get_all_art_supplies_filenames', methods=['GET', 'POST'])
@cross_origin()
def get_all_art_supplies_filenames():
    if request.method == 'GET':
        rec = recommendation({})
        return {'filenames': [val.attributes['img_filename'] for (key, val) in rec.og_art_supplies.items()]}


if __name__ == '__main__':
    app.run('0.0.0.0', 6969,
            ssl_context=('/etc/letsencrypt/live/i-need-art-supplies-help.pasten.life/fullchain.pem',
                         '/etc/letsencrypt/live/i-need-art-supplies-help.pasten.life/privkey.pem'))
