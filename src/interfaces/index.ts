import { EStaffDepartment, EStaffRole, EStaffType } from "./enums";

export interface IStaff {
  id: number;
  name: string;
  role: EStaffRole;
  type: EStaffType;
  department: EStaffDepartment;
}

export interface IState {
  staffs: IStaff[];
}
