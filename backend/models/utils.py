import csv
import os.path

from art_supply import artSupply
import logging
from datetime import datetime
import os
from pathlib import Path

APP_NAME = 'art_supplies_app'
ART_SUPPLIES_CSV = '../art_supplies/art_supplies.csv'
BASE_DIR = f'/opt/{APP_NAME}'
LOG_DIR = os.path.join(BASE_DIR, 'logs')


def get_logger():
    date_strftime_format = "%d-%m-%y_%H-%M-%S"
    message_format = logging.Formatter("%(asctime)s - %(levelname)s - %(message)s")
    log_path = os.path.join(LOG_DIR, f'{APP_NAME}_{datetime.now().strftime(date_strftime_format)}.log')

    logger = logging.getLogger(APP_NAME)
    logger.setLevel(logging.DEBUG)

    ch = logging.StreamHandler()
    ch.setLevel(logging.DEBUG)
    ch.setFormatter(message_format)

    fh = logging.FileHandler(log_path)
    fh.setLevel(logging.DEBUG)
    fh.setFormatter(message_format)

    logger.addHandler(ch)
    logger.addHandler(fh)
    return logger


def get_art_supplies(logger):
    """ get art supplies from CSV """
    art_supplies = []
    with open(ART_SUPPLIES_CSV, 'r') as art_supplies_csv:
        reader = csv.DictReader(art_supplies_csv)
        for row in reader:
            art_supplies.append(artSupply(logger=logger, details=row))
            logger.debug(f'imported {row["id"]}')
        logger.info(f'imported {len(art_supplies)} art supplies')
    return art_supplies


def get_groups():
    pass


if __name__ == '__main__':
    logger = get_logger()
    art_supplies = get_art_supplies(logger)
    import ipdb;

    ipdb.set_trace()
