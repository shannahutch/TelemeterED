from flask import Flask
app = Flask(__name__)


@app.route('/')
def hello():
    return "TelemeterED!!  Coming soon to a GIG near you.."

@app.route('/<portal>')
def portal(portal):
  return "STEM Portal for microscope !".format(name)

if __name__ == '__main__':
    app.run()