export interface Consult {
  p_id: number; //id del paciente
  date: string; //formato dd/mm/yyyy
  motive: string;
  n_ins: string; //numero del seguro del paciente
  paid: number;
  diag: string;
  note: string;
  photo: any; //blob image
}
