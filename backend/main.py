from models.utils import get_logger
from models.recommendation import recommendation

# '0' = true, 1 = false, 2 = both
test_answer = {
    'compact': '0',  # indoors / outdoors / NM
    'preferred_art_types': ['crafting', 'sketching', 'painting'],
    'likes_experimenting': '1',
    'messy': '0',
    'together': '0',
    'safe_bet': '1'
}

if __name__ == '__main__':
    # logger = get_logger()
    recommendation = recommendation(test_answer)
    # art_supplies = get_art_supplies(logger)
    # groups = get_groups(logger, art_supplies)
    import ipdb

    ipdb.set_trace()
