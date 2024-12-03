import { IStaff, IState } from "../interfaces";

const mutations = {
  addStaff(state: IState, staff: IStaff) {
    state.staffs = [...state.staffs, staff];
  },
  editStaff(state: IState, updatedStaff: IStaff) {
    state.staffs = state.staffs.map((staff) =>
      staff.id === updatedStaff.id ? { ...staff, ...updatedStaff } : staff
    );
  },
  removeStaff(state: IState, id: number) {
    state.staffs = state.staffs.filter((staff) => staff.id !== id);
  },
};

export default mutations;
