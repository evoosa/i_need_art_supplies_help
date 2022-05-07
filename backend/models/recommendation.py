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
        def _remove_supply(self, supply):
            try:
                self.recommended_art_supplies[supply].pop(supply)
                self.logger.debug(f'removed {supply}')
            except KeyError:
                self.logger.debug(f'removing {supply} failed since it\'s missing')

        # if the supplies need to be compact, drop everything that is not compact. else, pass
        if self.answer['compact'] == '0':
            for supply in self.recommended_art_supplies.keys():
                if supply not in self.groups['compact']:
                    self.logger.info(f'removing {supply} since it\'s not compact')
                    _remove_supply(self, supply)

        # if she doesn't like experimenting, remove all supplies that she won't like. if she does, do nothing
        if self.answer['likes_experimenting'] == '1':
            for group in self.groups.keys():
                if group not in self.answer['preffered_art_types']:
                    for supply in self.groups[group]:
                        self.logger.info(f'removing {supply} since the spouse doesn\'t like {group}')
                        _remove_supply(self, supply)

        # if it's an activity to do together, remove all non-together activities. if it's for the spouse only - remove all together activities
        if self.answer['together'] == '0':
            for supply in self.recommended_art_supplies.keys():
                if supply not in self.groups['together']:
                    self.logger.info(f'removing {supply} since it\'s not meant to be used together')
                    _remove_supply(self, supply)
        elif self.answer['together'] == '1':
            for supply in self.recommended_art_supplies.keys():
                if supply in self.groups['together']:
                    self.logger.info(f'removing {supply} since it\'s for loners only')
                    _remove_supply(self, supply)
        elif self.answer['together'] == '2':
            self.logger.info(f'not removing supplies since the activity can be done together or alone, skipping')

