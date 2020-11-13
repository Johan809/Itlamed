export interface Patient {
  id_card: string; //cedula
  photo: any; //blob image
  name: string;
  lastname: string;
  blood_type: string;
  gender: string;
  b_date: string; //formato dd/mm/yyyy
  allergies: string;
}
