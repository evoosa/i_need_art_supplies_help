import csv
from art_supply import artSupply
import logging
from datetime import datetime

ART_SUPPLIES_CSV = '../art_supplies/art_supplies.csv'


def get_logger():
    date_strftime_format = "%d-%b-%y %H:%M:%S"
    message_format = logging.Formatter("%(asctime)s - %(levelname)s - %(message)s")
    log_path = f'art_supplies_app_{datetime.now().strftime(date_strftime_format)}'

    logger = logging.getLogger(log_path)
    logger.setLevel(logging.DEBUG)
    ch = logging.StreamHandler()
    ch.setLevel(logging.DEBUG)
    ch.setFormatter(message_format)
    logger.addHandler(ch)
    return logger


def get_art_supplies(logger):
    """ get art supplies from CSV """
    art_supplies = []
    with open(ART_SUPPLIES_CSV, 'r') as art_supplies_csv:
        reader = csv.DictReader(art_supplies_csv)
        for row in reader:
            art_supplies.append(artSupply(details=row))
            print(f'imported {row["id"]}')
    return art_supplies


def get_groups():
    pass


if __name__ == '__main__':
    logger = get_logger()
    get_art_supplies(logger)
