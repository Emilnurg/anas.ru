#!/bin/bash
git pull
source venv/bin/activate
find . -type f -name "*.pyc" -exec rm -f {} \;
pip install -r requirements.txt
yes "yes" | python manage.py migrate
cd static/
npm install
cd ../
python manage.py collectstatic --noinput
supervisorctl restart anas
