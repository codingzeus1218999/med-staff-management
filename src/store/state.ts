import { IStaff, IState } from "../interfaces";
import db from "../data/staffs.json";

export const state: IState = {
  staffs: db.staffs as IStaff[],
};
