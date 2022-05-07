from utils import get_art_supplies, get_logger, get_groups

# 0 = true, 1 = false, 2 = both
test_answer = {
    'compact': 0,  # indoors / outdoors / NM
    'preffered_art_types': ['crafting', 'sketching', 'painting', 'writing'],
    'likes_experimenting': 0,
    'messy': 0,
    'together': 0,
    'safe_bet': 0
}


class recommendation():
    """ a class for the art supplies recommendation """

    def __init__(self, answer: dict):
        self.answer = answer
        self.logger = get_logger()
        self.og_art_supplies = get_art_supplies(self.logger)
        self.groups = get_groups(self.logger, self.og_art_supplies)
        self.recommended_art_supplies = self.og_art_supplies.copy()

    def get_recommended_groups(self):
        # if the supplies need to be compact, drop everything that is not compact. else, pass
        if self.answer['compact'] == '0':
            for supply in self.recommended_art_supplies.keys():
                if supply not in self.groups['compact']:
                    poped_supply = self.recommended_art_supplies[supply].popitem()
                    self.logger(f'removed {poped_supply[0]} since it\'s not compact')

        # if self.answer