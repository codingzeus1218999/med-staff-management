import { ActionContext } from "vuex";
import { IState, IStaff } from "../interfaces";

const actions = {
  addStaff({ commit }: ActionContext<IState, IState>, staff: IStaff) {
    commit("addStaff", staff);
  },

  editStaff({ commit }: ActionContext<IState, IState>, updatedStaff: IStaff) {
    commit("editStaff", updatedStaff);
  },

  removeStaff({ commit }: ActionContext<IState, IState>, id: number) {
    commit("removeStaff", id);
  },
};

export default actions;
