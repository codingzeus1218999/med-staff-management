import { ActionContext } from "vuex";
import { IState, IStaff } from "../interfaces";

const actions = {
  // Add a new doctor
  addDoctor({ commit }: ActionContext<IState, IState>, doctor: IStaff) {
    commit("addDoctor", doctor); // Directly commit the mutation
  },

  // Edit an existing doctor
  editDoctor({ commit }: ActionContext<IState, IState>, updatedDoctor: IStaff) {
    commit("editDoctor", updatedDoctor); // Directly commit the mutation
  },

  // Remove a doctor
  removeDoctor({ commit }: ActionContext<IState, IState>, id: number) {
    commit("removeDoctor", id); // Directly commit the mutation
  },

  // Add a new nurse
  addNurse({ commit }: ActionContext<IState, IState>, nurse: IStaff) {
    commit("addNurse", nurse); // Directly commit the mutation
  },

  // Edit an existing nurse
  editNurse({ commit }: ActionContext<IState, IState>, updatedNurse: IStaff) {
    commit("editNurse", updatedNurse); // Directly commit the mutation
  },

  // Remove a nurse
  removeNurse({ commit }: ActionContext<IState, IState>, id: number) {
    commit("removeNurse", id); // Directly commit the mutation
  },
};

export default actions;
