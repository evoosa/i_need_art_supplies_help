
class artSupply():
    """ a Class For an Art Supply """

    def __init__(self, logger, details):
        self.__details = details
        self.id = self.__details['id']
        self.logger = logger
        self.group_membership = {}
        self.attributes = {}
        self.__parse_details()

    def __parse_details(self):
        for key in self.__details:
            if key.startswith('g_'):
                self.group_membership[key.replace('g_', '')] = self.__details[key]
            elif key.startswith('attr_'):
                self.attributes[key.replace('attr_', '')] = self.__details[key]
        # self.logger.debug(self.__dict__)
