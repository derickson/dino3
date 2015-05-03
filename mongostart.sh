#!/bin/sh

mkdir -p data/standalone logs

## Standard
mongod --logpath logs/standalone.log --dbpath data/standalone --smallfiles --fork --port 27017 --oplogSize 64

## WiredTiger in 2.8
## $WHICHMONGOD --logpath standalone.log --dbpath data/standalone --smallfiles --fork --port 27017 --storageEngine wiredtiger --oplogSize 64