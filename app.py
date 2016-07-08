import os
from flask import Flask
from flask import render_template
from flask.ext.sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config.from_object(os.environ['APP_SETTINGS'])
# check that it is detecting the correct environ
# print(os.environ['APP_SETTINGS'])
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

import models 

# npm build
@app.route('/')
def index():
    return render_template('client/app/build/index.html')

@app.route('/app.js')
def appjs():
    return render_template('client/app/build/app.js')

# @app.route('/home')
# def home():
#     return render_template('home.html')

# @app.route('/<portal>')
# def portal(portal):
#     return "STEM Portal for microscope !".format(portal)


if __name__ == '__main__':
    app.run()

