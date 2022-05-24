from flask import Flask, redirect, url_for, request, jsonify
from flask_cors import CORS
import pprint

from models.recommendation import recommendation

app = Flask(__name__)
CORS(app, resources={r"/get_recommended_art_supplies": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'

test_answer = {
    'compact': '0',  # indoors / outdoors / NM
    'preferred_art_types': ['crafting', 'sketching', 'painting'],
    'likes_experimenting': '0',
    'messy': '0',
    'together': '1',
    'safe_bet': '1'
}


@app.route('/get_recommended_art_supplies', methods=['GET', 'POST'])
def get_recommended_art_supplies():
    if request.method == 'POST':
        form_data = request.get_json()
        pprint.pprint(form_data)
        return 'ni'
        # import ipdb
        # ipdb.set_trace()
        # response = jsonify(request.form)
        # response.headers.add('Access-Control-Allow-Origin', '*')
        # return response
        # rec = recommendation(request.form)
        # rec.get_recommended_groups()
        # return {key: val.attributes for (key, val) in rec.recommended_art_supplies.items()}


if __name__ == '__main__':
    app.run('0.0.0.0', 6969)
