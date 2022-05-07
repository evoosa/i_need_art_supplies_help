from .utils import get_art_supplies, get_logger, get_groups


class recommendation():
    """ a class for the art supplies recommendation """

    def __init__(self, answer: dict):
        self.answer = answer
        self.logger = get_logger()
        self.og_art_supplies = get_art_supplies(self.logger)
        self.groups = get_groups(self.logger, self.og_art_supplies)
        self.recommended_art_supplies = self.og_art_supplies.copy()

    def __remove_supply(self, supply):
        try:
            self.recommended_art_supplies.pop(supply)
            self.logger.debug(f'removed {supply}')
        except KeyError:
            self.logger.debug(f'removing {supply} failed since it\'s missing')

    def _handle_compact_art_supplies(self):
        """ if the supplies need to be compact, drop everything that is not compact. else, pass """
        recommended_art_supplies_keys = list(self.recommended_art_supplies.keys()).copy()
        if self.answer['compact'] == '0':
            for supply in recommended_art_supplies_keys:
                if supply not in self.groups['compact']:
                    self.logger.info(f'removing {supply} since it\'s not compact')
                    self.__remove_supply(supply)
                else:
                    self.logger.debug(f'keeping {supply} since it\'s compact')

    def _handle_experimental_art_supplies(self):
        """ if she doesn't like experimenting, remove all supplies that she won't like. if she does, do nothing """
        supplies_to_potentially_remove = []
        supplies_to_keep = []
        if self.answer['likes_experimenting'] == '1':
            for group in self.groups.keys():
                if group not in self.answer['preferred_art_types']:
                    self.logger.debug(f'removing {group} since the spouse doesn\'t like it')
                    supplies_to_potentially_remove += self.groups[group]
                else:
                    supplies_to_keep += self.groups[group]
                    self.logger.debug(f'keeping {group} since the spouse likes it')

            supplies_to_remove = list(set(supplies_to_potentially_remove) - set(supplies_to_keep))
            for supply in supplies_to_remove:
                self.logger.info(f'removing {supply} since the spouse doesn\'t like it\'s group')
                self.__remove_supply(supply)
        else:
            self.logger.debug(f'keeping all groups since the spouse likes experimenting')

    def _handle_together_art_supplies(self):
        """ if it's an activity to do together, remove all non-together activities. if it's for the spouse only - remove all together activities """
        recommended_art_supplies_keys = list(self.recommended_art_supplies.keys()).copy()
        if self.answer['together'] == '0':
            for supply in recommended_art_supplies_keys:
                if supply not in self.groups['together']:
                    self.logger.info(f'removing {supply} since it\'s not meant to be used together')
                    self.__remove_supply(supply)
        elif self.answer['together'] == '1':
            for supply in recommended_art_supplies_keys:
                if supply in self.groups['together']:
                    self.logger.info(f'removing {supply} since it\'s for loners only')
                    self.__remove_supply(supply)
        elif self.answer['together'] == '2':
            self.logger.info(f'not removing supplies since the activity can be done together or alone, skipping')

    def get_recommended_groups(self):
        recommended_art_supplies_keys = list(self.recommended_art_supplies.keys()).copy()
        if self.answer['safe_bet'] == '0':
            for supply in recommended_art_supplies_keys:
                if supply not in self.groups['safe_bet']:
                    self.logger.info(f'removing {supply} since it\'s not a safe bet')
                    self.__remove_supply(supply)
                else:
                    self.logger.debug(f'keeping {supply} since it\'s a safe bet')
        else:
            self._handle_together_art_supplies()
            self._handle_compact_art_supplies()
            self._handle_experimental_art_supplies()
