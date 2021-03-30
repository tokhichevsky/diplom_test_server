#!/bin/bash

set -e

a=$(pwd)

while sleep 120;
do
  dt=$(date '+%d/%m/%Y %H:%M:%S');
  echo "$dt"
  echo "-----Entering Client directory"
  cd /home/projects/experiment
  if [[ "$(git pull)" == *"Already up to date."* ]];
  then
    echo "-----There are no changes"
  else
	echo "-----Node.js routine-----"
	npm install
	echo "-----Build the Client-----"
	npm build
  fi

  echo "-----Entering Server directory"
  cd /home/projects/experiment_server

  if [[ "$(git pull)" == *"Already up to date."* ]]; then
    echo "-----There are no changes"
    continue
  fi
  echo "-----Node.js routine-----"
  npm install
  echo "-----PM2 reload server process-----"
  pm2 reload server
  echo "-----Cleanup-----"
  cd $a
done
