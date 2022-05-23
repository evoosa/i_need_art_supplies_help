from flask import Flask, redirect, url_for, request
from flask_cors import CORS

from models.recommendation import recommendation

app = Flask(__name__)
# CORS(app, resources={r"/get_recommended_art_supplies": {"origins": "*"}})
# app.config['CORS_HEADERS'] = 'Content-Type'

test_answer = {
    'compact': '0',  # indoors / outdoors / NM
    'preferred_art_types': ['crafting', 'sketching', 'painting'],
    'likes_experimenting': '0',
    'messy': '0',
    'together': '1',
    'safe_bet': '1'
}


@app.route('/get_recommended_art_supplies', methods=['GET', 'POST'])
# @cross_origin(origin='*', headers=['Content-Type', 'Authorization'])
def get_recommended_art_supplies():
    if request.method == 'POST':
        print(request)
        # rec = recommendation(request.form)
        # rec.get_recommended_groups()
        # return {key: val.attributes for (key, val) in rec.recommended_art_supplies.items()}


if __name__ == '__main__':
    app.run('localhost', 6969)
