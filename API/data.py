from datetime import datetime
from peewee import *
import uuid

db = SqliteDatabase('ITLAMED.db')
ZodiacalSigns = [
    'aries', 'libra', 'tauro',
    'escorpio', 'geminis', 'sagitario',
    'cancer', 'capricornio', 'leo',
    'acuario', 'virgo', 'piscis'
]


class DBModel(Model):
    class Meta:
        database = db


class Doctor(DBModel):
    _id = AutoField()
    name = CharField()
    email = CharField()
    password = CharField()


class Patient(DBModel):
    _id = AutoField()
    dr = ForeignKeyField(Doctor, backref='h_doctor')
    id_card = CharField()  # Cedula
    photo = BlobField()  # convertir la imagen en base64 y guardarla en la db
    name = CharField()
    lastname = CharField()
    blood_type = CharField()
    email = CharField()
    gender = CharField()
    b_date = DateField()
    allergies = CharField()


class Consultation(DBModel):
    _id = AutoField()
    dr = ForeignKeyField(Doctor, backref='cons')
    patient = ForeignKeyField(Patient, backref='patients')
    date = DateField()
    motive = CharField()
    n_insurance = CharField()
    p_amount = FloatField()
    diagnosis = TextField()
    note = TextField()
    photo = BlobField()  # lo mismo que la foto del paciente


class Sesion(DBModel):
    _id = AutoField()
    token = CharField()
    user = ForeignKeyField(Doctor, backref='user')


def getOld(nacDate: str):
    today = datetime.now()
    birthday = datetime.strptime(nacDate, "%Y-%m-%d")
    return today.year - birthday.year - ((today.month, today.day) < (birthday.month, birthday.day))


def getSign(nacDate: datetime.date):
    month = nacDate.month
    day = nacDate.day

    if ((day >= 21 and month == 3) or (day <= 20 and month == 4)):
        sign = 0
    elif ((day >= 24 and month == 9) or (day <= 23 and month == 10)):
        sign = 1
    elif ((day >= 21 and month == 4) or (day <= 21 and month == 5)):
        sign = 2
    elif ((day >= 24 and month == 10) or (day <= 22 and month == 11)):
        sign = 3
    elif ((day >= 22 and month == 5) or (day <= 21 and month == 6)):
        sign = 4
    elif ((day >= 23 and month == 11) or (day <= 21 and month == 12)):
        sign = 5
    elif ((day >= 21 and month == 6) or (day <= 23 and month == 7)):
        sign = 6
    elif ((day >= 22 and month == 12) or (day <= 20 and month == 1)):
        sign = 7
    elif ((day >= 24 and month == 7) or (day <= 23 and month == 8)):
        sign = 8
    elif ((day >= 21 and month == 1) or (day <= 19 and month == 2)):
        sign = 9
    elif ((day >= 24 and month == 8) or (day <= 23 and month == 9)):
        sign = 10
    elif ((day >= 20 and month == 2) or (day <= 20 and month == 3)):
        sign = 11

    return ZodiacalSigns[sign].capitalize()


def getDate(_date: str):
    if "-" in _date:
        withDash = int(_date.split('-')[0])
        if withDash > 1000:
            resultDate = datetime.strptime(_date, "%Y-%m-%d")
            return resultDate
        elif withDash <= 31:
            resultDate = datetime.strptime(_date, "%d-%m-%Y")
            return resultDate

    elif "/" in _date:
        withSlash = int(_date.split('/')[0])
        if withSlash > 1000:
            resultDate = datetime.strptime(_date, "%Y/%m/%d")
            return resultDate
        elif withSlash <= 31:
            resultDate = datetime.strptime(_date, "%d/%m/%Y")
            return resultDate


def generate_token():
    return str(uuid.uuid4()).replace('-', '')


def serverAnswer(status: bool, msg: str, args={}):
    _arg = False
    if args != {}:
        _arg = True
    a = {'ok': status, 'msg': msg, 'arg': args}
    b = {'ok': status, 'msg': msg}
    return a if _arg else b
