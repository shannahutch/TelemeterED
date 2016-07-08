flask-telemetered

SETUP-
For the initial setup, you should have some familiarity with the following tools:
  • Virtualenv – http://www.virtualenv.org/en/latest/
  • Flask – http://flask.pocoo.org/
  • git/Github – http://try.github.io/levels/1/challenges/1
  • Heroku (basics) – https://devcenter.heroku.com/articles/getting-started-with-python
  • Python and pip as well.
  • Heroku toolbelt - https://toolbelt.heroku.com/
  • Webpack - http://webpack.github.io/docs/installation.html


$ mkdir flask-by-example && cd flask-by-example
-Initialize git repo
$ git init
- Set up a virtual environment 
$ virtualenv venv
- activate the env …or deactivate(when done working)
$ source venv/bin/activate 
$ deactivate
Install some packages - 
$ pip install requests
Now freeze your current package state
$ pip freeze > requirements.txt
- run real requirements
$ pip install -r requirements.txt
- create basic files
$ touch app.py .gitignore README.md requirements.txt
- install Flask for this project
$ pip install Flask==0.10.1
- freeze requirements again
$ pip freeze > requirements.txt

Run basic server then open http://127.0.0.1:5000/
$ python app.py
http://localhost:5000/

add Webpack - 
$ npm install webpack -g

create a Profile and 
$ touch Procfile
   - add the following to it. 
     web: gunicorn app:app

- Add unicorn to requirements
$ pip install gunicorn==19.4.5
$ pip freeze > requirements.txt
