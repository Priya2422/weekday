import { getSampleJdJSON } from "../../data/dummyData";

export const LOCATION_TYPE = ["REMOTE", "ONSITE"];
export const SALARY = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110];
export const ROLES = [...new Set(getSampleJdJSON().map((jobs) => jobs.jobRole))];