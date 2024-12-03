import { IStaff, IState } from "../interfaces";
import db from "../data/staffs.json";
import { EStaffType } from "../interfaces/enums";

export const state: IState = {
  doctors: db.staffs.filter((r) => r.type === EStaffType.Doctor) as IStaff[],
  nurses: db.staffs.filter((r) => r.type === EStaffType.Nurse) as IStaff[],
};
