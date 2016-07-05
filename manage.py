import os
from flask.ext.script import Manager
from flask.ext.migrate import Migrate, MigrateCommand

from app import app, db


app.config.from_object(os.environ['APP_SETTINGS'])

migrate = Migrate(app, db)
manger = Manager(app)

manger.add_command('db', MigrateCommand)


if __name__ == '__main__':
  manger.run()