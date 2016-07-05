from app import db
# I'm not sure I need the next line
from sqlalchemy.dialects.postgresql import JSON


class Video(db.Model):
    __tablename__ = 'videos'

    id = db.Column(db.Integer, primary_key=True)
    url = db.Column(db.String())
    record_date = db.Column(db.DateTime)
    class_team = db.Column(db.String(50))
    slide_summary = db.Column(db.String(300))
    teacher = db.Column(db.String(50))

    def __init__(self, url, record_date, class_team, slide_summary, teacher):
        self.url = url
        self.record_date = record_date
        self.class_team = class_team
        self.slide_summary = slide_summary
        self.teacher = teacher


    def __repr__(self):
        return '<id {}>'.format(self.id)