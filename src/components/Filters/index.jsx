import { useFilterContext } from "../../contexts/filterContext";
import { memo } from "react";
import { MenuItem, Select } from "@mui/material";
import { getSampleJdJSON } from "../../data/dummyData";
const LOCATION_TYPE = ["REMOTE", "ONSITE"];
const SALARY = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110];
const ROLES = [...new Set(getSampleJdJSON().map((jobs) => jobs.jobRole))];
const FilterSection = () => {
  const {
    filters: { companyName, location, locationType, role },
    updateFilterValue,
  } = useFilterContext();

  return (
    <div>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="companyName"
            placeholder="Search"
            value={companyName}
            onChange={updateFilterValue}
          />
          <input
            type="text"
            name="location"
            placeholder="Search"
            value={location}
            onChange={updateFilterValue}
          />
          <Select name="locationType" value={locationType} onChange={updateFilterValue}>
            {LOCATION_TYPE.map((type) => {
              return <MenuItem value={type}>{type}</MenuItem>;
            })}
          </Select>
          <Select name="salary" value={locationType} onChange={updateFilterValue}>
            {SALARY.map((type) => {
              return <MenuItem value={type}>{type}</MenuItem>;
            })}
          </Select>
          <Select name="role" value={role} onChange={updateFilterValue} multiple>
            {ROLES.map((type) => {
              return <MenuItem value={type}>{type}</MenuItem>;
            })}
          </Select>
        </form>
      </div>
    </div>
  );
};

export const Filter = memo(FilterSection);
