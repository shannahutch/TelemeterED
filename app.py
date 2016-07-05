import os
from flask import Flask
from flask.ext.sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config.from_object(os.environ['APP_SETTINGS'])
# check that it is detecting the correct environ
# print(os.environ['APP_SETTINGS'])
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

from models import Video


@app.route('/')
def hello():
    return "TelemeterED!!  Coming soon to a GIG near you.."

@app.route('/<portal>')
def portal(portal):
  return "STEM Portal for microscope !".format(portal)

if __name__ == '__main__':
    app.run()