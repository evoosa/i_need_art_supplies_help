from flask import Flask
from models.recommendation import recommendation

app = Flask(__name__)

test_answer = {
    'compact': '0',  # indoors / outdoors / NM
    'preferred_art_types': ['crafting', 'sketching', 'painting'],
    'likes_experimenting': '0',
    'messy': '0',
    'together': '1',
    'safe_bet': '1'
}


@app.route('/get_recommended_art_supplies')
def hello():
    rec = recommendation(test_answer)
    rec.get_recommended_groups()
    return {key: val.attributes for (key, val) in rec.recommended_art_supplies.items()}


if __name__ == '__main__':
    app.run('localhost', 6969)
