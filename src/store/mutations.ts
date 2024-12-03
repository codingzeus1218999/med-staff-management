import { IStaff, IState } from "../interfaces";

const mutations = {
  addDoctor(state: IState, doctor: IStaff) {
    state.doctors = [...state.doctors, doctor];
  },
  editDoctor(state: IState, updatedDoctor: IStaff) {
    state.doctors = state.doctors.map((doctor) =>
      doctor.id === updatedDoctor.id ? { ...doctor, ...updatedDoctor } : doctor
    );
  },
  removeDoctor(state: IState, id: number) {
    state.doctors = state.doctors.filter((doctor) => doctor.id !== id);
  },
  addNurse(state: IState, nurse: IStaff) {
    state.nurses = [...state.nurses, nurse];
  },
  editNurse(state: IState, updatedNurse: IStaff) {
    state.nurses = state.nurses.map((nurse) =>
      nurse.id === updatedNurse.id ? { ...nurse, ...updatedNurse } : nurse
    );
  },
  removeNurse(state: IState, id: number) {
    state.nurses = state.nurses.filter((nurse) => nurse.id !== id);
  },
};

export default mutations;
