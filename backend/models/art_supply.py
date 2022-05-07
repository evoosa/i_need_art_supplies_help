# create an object for an art supply
# create a pickle containing { group: art supplies } dynamically - you'll need it when deciding which groups to display

class artSupply():
    """ a Class For an Art Supply """

    def __init__(self, logger, **details):
        self.details = details
        self.id = self.details['details']['id']
        self.logger = logger
        self.group_membership = {}
        self.attributes = {}
        self.__parse_details()

    def __parse_details(self):
        for key in self.details['details']:
            if key.startswith('g_'):
                self.group_membership[key.replace('g_', '')] = self.details['details'][key]
            elif key.startswith('attr_'):
                self.attributes[key.replace('attr_', '')] = self.details['details'][key]
        # self.logger.debug(self.__dict__)
