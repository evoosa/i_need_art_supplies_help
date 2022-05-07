import csv
from art_supply import artSupply

ART_SUPPLIES_CSV = '../art_supplies/art_supplies.csv'


def get_art_supplies():
    """ get art supplies from CSV """
    art_supplies = []
    with open(ART_SUPPLIES_CSV, 'r') as art_supplies_csv:
        reader = csv.DictReader(art_supplies_csv)
        for row in reader:
            art_supplies.append(artSupply(details=row))
            print(f'imported {row["id"]}')
    import ipdb
    ipdb.set_trace()
    return art_supplies


def get_groups():
    pass

if __name__ == '__main__':
    get_art_supplies()