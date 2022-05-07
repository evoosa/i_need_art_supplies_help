# create an object for an art supply
# create a pickle containing { group: art supplies } dynamically - you'll need it when deciding which groups to display

class artSupply():
    """ a Class For an Art Supply """
    def __init__(self, **details):
        self.details = details
        self.group_membership = {}
        self.attributes = {}

    def __parse_details(self):
        pass
