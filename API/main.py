from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from peewee import *
from data import *

app = FastAPI()
origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:4200",
    "http://localhost:8100"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
db.connect()
db.create_tables([Doctor, Patient, Consultation, Sesion], safe=True)


class DrModel(BaseModel):
    name: str
    email: str
    password: str


class PatModel(BaseModel):
    id_card: str
    photo: str
    name: str
    lastname: str
    blood_type: str
    email: str
    gender: str
    b_date: str
    allergies: str


class ConsModel(BaseModel):
    p_id: int
    date: str
    motive: str
    n_ins: str
    paid: float
    diag: str
    note: str
    photo: str


class SesionModel(BaseModel):
    email: str
    password: str


@app.get('/')
def index():
    sesions = []
    for s in Sesion.select():
        ses = {
            'id': s._id,
            'med': s.user,
            'token': s.token
        }
        sesions.append(ses)
    return {'Sesiones': sesions}


@app.post('/regMed')
def create_med(med: DrModel):
    try:
        for d in Doctor.select():
            if med.name == d.name and med.email == d.email:
                return serverAnswer(False, 'El usuario ya existe')
        newMed = Doctor(name=med.name, email=med.email, password=med.password)
        newMed.save()
        return serverAnswer(True, 'El usuario ha sido registrado correctamente')
    except:
        return serverAnswer(False, 'Ha ocurrido un error, intente mas tarde')


@app.post('/login')
def med_login(ses: SesionModel):
    try:
        act_med = Doctor.select().where((Doctor.email == ses.email) &
                                        (Doctor.password == ses.password)).get()
        token = generate_token()
        newSesion = Sesion(token=token, user=act_med)
        newSesion.save()
        msg = f"La sesion de {act_med.name} ha sido iniciada correctamente"
        return serverAnswer(True, msg, token)
    except:
        return serverAnswer(False, 'Credenciales Invalidas')


@app.post('/regPatient/{token}')
def create_patient(pat: PatModel, token: str):
    try:
        act_ses = Sesion.select().where(Sesion.token == token).get()
        act_med = Doctor.select().where((Doctor.name == act_ses.user.name)
                                        & (Doctor.email == act_ses.user.email)).get()
        _date = getDate(pat.b_date)
        newPat = Patient(dr=act_med, id_card=pat.id_card, photo=pat.photo, name=pat.name, lastname=pat.lastname,
                         blood_type=pat.blood_type, email=pat.email, gender=pat.gender, b_date=_date, allergies=pat.allergies)
        newPat.save()
        msg = f"Paciente del doctor {act_med.name} registrado con exito"
        name_pat = f"{newPat.name} {newPat.lastname}"
        return serverAnswer(True, msg, {'Paciente': name_pat})
    except:
        return serverAnswer(False, 'Token invalido')


@app.get('/getPatients/{token}')
def read_patients(token: str):
    try:
        patients = []
        act_ses = Sesion.select().where(Sesion.token == token).get()
        act_med = Doctor.select().where((Doctor.name == act_ses.user.name)
                                        & (Doctor.email == act_ses.user.email)).get()
        query = Patient.select().join(Doctor).where(
            (Doctor.name == act_med.name) & (Doctor.email == act_med.email))
        for p in query:
            pat = {
                'id': p._id,
                'dr': p.dr,
                'id_card': p.id_card,
                'photo': p.photo,
                'name': p.name,
                'lastn': p.lastname,
                'blood': p.blood_type,
                'email': p.email,
                'gender': p.gender,
                'bdate': p.b_date,
                'allergies': p.allergies
            }
            patients.append(pat)
        msg = f"Todos los pacientes del dr. {act_med.name}"
        return serverAnswer(True, msg, patients)
    except:
        return serverAnswer(False, 'Token invalido')


@app.get('/getPatients/{token}/{_id}')
def read_patient(token: str, _id: int):
    try:
        act_ses = Sesion.get(Sesion.token == token)
        act_med = Doctor.select().where((Doctor.name == act_ses.user.name)
                                        & (Doctor.email == act_ses.user.email)).get()
        p = Patient.select().join(Doctor).where(
            (Doctor.name == act_med.name) & (Patient._id == _id)).get()
        actPat = {
            'id': p._id,
            'dr': p.dr,
            'id_card': p.id_card,
            'photo': p.photo,
            'name': p.name,
            'lastn': p.lastname,
            'blood': p.blood_type,
            'email': p.email,
            'gender': p.gender,
            'bdate': p.b_date,
            'allergies': p.allergies
        }
        return serverAnswer(True, 'Paciente seleccionado', actPat)
    except:
        return serverAnswer(False, 'Token invalido')


@app.put('/upPatient/{token}/{_id}')
def update_patient(pat: PatModel, token: str, _id: int):
    try:
        act_ses = Sesion.get(Sesion.token == token)
        act_med = Doctor.get(Doctor.email == act_ses.user.email)
        p = Patient.select().join(Doctor).where(
            (Doctor.name == act_med.name) & (Patient._id == _id)).get()
        p.id_card = pat.id_card
        p.photo = pat.photo
        p.name = pat.name
        p.lastname = pat.lastname
        p.blood_type = pat.blood_type
        p.email = pat.email
        p.gender = pat.gender
        p.b_date = getDate(pat.b_date)
        p.allergies = pat.allergies
        p.save()
        msg = f"Paciente {p.name} {p.lastname} ha sido editado con exito"
        return serverAnswer(True, msg)
    except:
        return serverAnswer(False, "Error al editar")


@app.delete('/delPatients/{token}/{_id}')
def delete_patient(token: str, _id: int):
    try:
        act_ses = Sesion.get(Sesion.token == token)
        act_med = Doctor.get(Doctor._id == act_ses.user._id)
        p = Patient.select().join(Doctor).where(
            (Doctor._id == act_med._id) & (Patient._id == _id)).get()
        query = Consultation.delete().where(Consultation.patient == p)
        query.execute()
        p.delete_instance()
        return serverAnswer(True, 'Paciente eliminado con exito')
    except:
        return serverAnswer(False, "Error al eliminar")


@app.post('/regConsult/{token}')
def create_consult(cons: ConsModel, token: str):
    try:
        act_ses = Sesion.get(Sesion.token == token)
        act_med = Doctor.select().join(Sesion).where(
            Doctor._id == Sesion.user).get()
        _date = getDate(cons.date)
        newCons = Consultation(dr=act_med._id, patient=cons.p_id, date=_date, motive=cons.motive,
                               n_insurance=cons.n_ins, p_amount=cons.paid, diagnosis=cons.diag, note=cons.note, photo=cons.photo)
        newCons.save()
        msg = f"La consulta con id {newCons._id} del dr. {act_med.name} registrada con exito"
        return serverAnswer(True, msg)
    except:
        return serverAnswer(False, 'Token invalido')


@app.get('/getConsult/{token}')
def read_consults(token: str):
    try:
        cons = []
        act_ses = Sesion.get(Sesion.token == token)
        act_med = Doctor.get(Doctor.name == act_ses.user.name)
        query = Consultation.select().join(Doctor).where(Doctor._id == act_med._id)
        for c in query:
            _c = {
                'id': c._id,
                'dr': c.dr,
                'pat': c.patient,
                'date': c.date,
                'motive': c.motive,
                'n_ins': c.n_insurance,
                'p_amount': c.p_amount,
                'diag': c.diagnosis,
                'note': c.note,
                'photo': c.photo
            }
            cons.append(_c)
        msg = f"Todos las consultas del dr. {act_med.name}"
        return serverAnswer(True, msg, cons)
    except:
        return serverAnswer(False, 'Token invalido')


@app.get('/getConsult/{token}/{_id}')
def read_consult(token: str, _id: int):
    try:
        act_ses = Sesion.get(Sesion.token == token)
        act_med = Doctor.get(Doctor._id == act_ses.user._id)
        c = Consultation.select().join(Doctor).where(
            (Doctor._id == act_med._id) & (Consultation._id == _id)).get()
        cons = {
            'id': c._id,
            'dr': c.dr,
            'pat': c.patient,
            'date': c.date,
            'motive': c.motive,
            'n_ins': c.n_insurance,
            'p_amount': c.p_amount,
            'diag': c.diagnosis,
            'note': c.note,
            'photo': c.photo
        }
        return serverAnswer(True, 'Consulta seleccionada', cons)
    except:
        return serverAnswer(False, 'Token invalido')


@app.put('/upConsult/{token}/{_id}')
def update_consult(cons: ConsModel, token: str, _id: int):
    try:
        act_ses = Sesion.get(Sesion.token == token)
        act_med = Doctor.get(Doctor._id == act_ses.user._id)
        c = Consultation.select().join(Doctor).where(
            (Doctor._id == act_med._id) & (Consultation._id == _id)).get()
        c.date = getDate(cons.date)
        c.motive = cons.motive
        c.n_insurance = cons.n_ins
        c.p_amount = cons.paid
        c.diagnosis = cons.diag
        c.note = cons.note
        c.photo = cons.photo
        c.save()
        msg = f"Consulta {c._id} del paciente {c.patient.name} ha sido editada con exito"
        return serverAnswer(True, msg)
    except:
        return serverAnswer(False, "Error al editar")


@app.delete('/delConsult/{token}/{_id}')
def delete_consult(token: str, _id: int):
    try:
        act_ses = Sesion.get(Sesion.token == token)
        act_med = Doctor.get(Doctor._id == act_ses.user._id)
        c = Consultation.select().join(Doctor).where(
            (Doctor._id == act_med._id) & (Consultation._id == _id)).get()
        c.delete_instance()
        return serverAnswer(True, 'Consulta eliminada con exito')
    except:
        return serverAnswer(False, "Error al eliminar")


@app.delete('/logout/{token}')
def med_logout(token: str):
    try:
        act_ses = Sesion.get(Sesion.token == token)
        msg = f"La sesion de {act_ses.user.name} ha sido cerrada con exito"
        act_ses.delete_instance()
        return serverAnswer(True, msg)
    except:
        return serverAnswer(False, 'Ha ocurrido un error, intente mas tarde')


@app.get('/reports/date/{token}/{date}')
def date_rep(token: str, date: str):
    try:
        result = []
        trueDate = getDate(date)
        act_ses = Sesion.get(Sesion.token == token)
        act_med = Doctor.get(Doctor._id == act_ses.user._id)
        query = Consultation.select().join(Doctor).where(
            (Doctor._id == act_med._id) & (Consultation.date == trueDate))
        for c in query:
            pat = {
                'id': c.patient._id,
                'name': c.patient.name,
                'lastname': c.patient.lastname,
                'n_ins': c.n_insurance,
                'motive': c.motive,
                'diag': c.diagnosis,
            }
            result.append(pat)
        msg = f"Pacientes de la fecha {date}"
        return serverAnswer(True, msg, result)
    except:
        return serverAnswer(False, 'Token invalido')


@app.get('/reports/zodiac/{token}')
def zod_rep(token: str):
    try:
        patients = []
        act_ses = Sesion.get(Sesion.token == token)
        act_med = Doctor.get(Doctor._id == act_ses.user._id)
        query = Patient.select().join(Doctor).where(Doctor._id == act_med._id)
        for p in query:
            pat = {
                'id': p._id,
                'id_card': p.id_card,
                'name': p.name,
                'lastn': p.lastname,
                'zoc': getSign(p.b_date)
            }
            patients.append(pat)
        msg = f"Todos los pacientes del dr. {act_med.name}, reporte por signo Zodiaco"
        return serverAnswer(True, msg, patients)
    except:
        return serverAnswer(False, 'Token invalido')


@app.get('/reports/cant/{token}')
def cant_rep(token: str):
    try:
        pats = []
        act_ses = Sesion.get(Sesion.token == token)
        act_med = Doctor.get(Doctor._id == act_ses.user._id)
        query = Patient.select().join(Doctor).where(Doctor._id == act_med._id)
        for p in query:
            count = 0
            for c in Consultation.select().join(Patient).where(Patient._id == p._id):
                count += 1
            pat = {
                'id_card': p.id_card,
                'name': p.name,
                'lastn': p.lastname,
                'blood': p.blood_type,
                'email': p.email,
                'gender': p.gender,
                'n_cons': count
            }
            pats.append(pat)
        msg = f"Todos los pacientes del dr. {act_med.name}, reporte por signo consulta"
        return serverAnswer(True, msg, pats)
    except:
        return serverAnswer(False, 'Token invalido')


db.close()
