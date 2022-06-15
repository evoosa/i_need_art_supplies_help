from models.recommendation import recommendation

# '0' = true, 1 = false, 2 = both
test_answer = {
    'compact': '0',  # indoors / outdoors / NM
    'preferred_art_types': ['crafting', 'sketching', 'painting'],
    'likes_experimenting': '0',
    'messy': '0',
    'together': '1',
    'safe_bet': '1'
}

if __name__ == '__main__':
    rec = recommendation(test_answer)
    rec.get_recommended_groups()
    print(rec.recommended_art_supplies.keys())

