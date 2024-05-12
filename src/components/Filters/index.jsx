import { useFilterContext } from "../../contexts/filterContext";
import { memo, useState } from "react";
import {
  Box,
  Button,
  Chip,
  Container,
  Input,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import { LOCATION_TYPE, ROLES, SALARY } from "../constants/index";
import "./filters.css";

const FilterSection = () => {
  const [isLocationTypeSelectorOpen, setisLocationTypeSelectorOpen] = useState(false);
  const [isSalarySelectorOpen, setisSalarySelectorOpen] = useState(false);
  const {
    filters: { companyName, location, locationType, role, salary },
    updateFilterValue,
    clearFilterValue,
  } = useFilterContext();
  return (
    <Container maxWidth>
      <form onSubmit={(e) => e.preventDefault()} className="filter-search">
        <TextField
          type="text"
          name="companyName"
          placeholder="Search Company Name"
          value={companyName}
          onChange={updateFilterValue}
          sx={{
            fontFamily: "inherit",
          }}
          fullWidth
        />
        <TextField
          type="text"
          name="location"
          placeholder="Search Location"
          value={location}
          onChange={updateFilterValue}
          sx={{
            fontFamily: "inherit",
          }}
          fullWidth
        />
        <Select
          name="locationType"
          value={locationType}
          onChange={updateFilterValue}
          displayEmpty
          open={isLocationTypeSelectorOpen}
          input={
            <OutlinedInput
              onClick={() => setisLocationTypeSelectorOpen(!isLocationTypeSelectorOpen)}
            />
          }
          renderValue={(val) => {
            if (val === "") return <span style={{ color: "#d0d0d0" }}>Remote/Onsite</span>;
            return (
              <>
                {val}
                {locationType ? (
                  <Button
                    onMouseDown={() => {
                      clearFilterValue("locationType");
                    }}
                  >
                    X
                  </Button>
                ) : undefined}
              </>
            );
          }}
          sx={{
            fontFamily: "inherit",
            "& .MuiSvgIcon-root": {
              borderLeft: "1px solid #000",
            },
          }}
          fullWidth
        >
          {LOCATION_TYPE.map((type) => {
            return (
              <MenuItem value={type} key={type}>
                {type}
              </MenuItem>
            );
          })}
        </Select>
        <Select
          name="salary"
          value={salary}
          onChange={updateFilterValue}
          displayEmpty
          open={isSalarySelectorOpen}
          input={<OutlinedInput onClick={() => setisSalarySelectorOpen(!isSalarySelectorOpen)} />}
          sx={{
            fontFamily: "inherit",
            "& .MuiSvgIcon-root": {
              borderLeft: "1px solid #000",
            },
          }}
          renderValue={(val) => {
            if (val === "") return <span style={{ color: "#d0d0d0" }}>Salary</span>;
            return (
              <>
                {val}
                {salary ? (
                  <Button
                    onMouseDown={() => {
                      clearFilterValue("salary");
                    }}
                  >
                    X
                  </Button>
                ) : undefined}
              </>
            );
          }}
          fullWidth
        >
          {SALARY.map((type) => {
            return (
              <MenuItem value={type} key={type}>
                {type}
              </MenuItem>
            );
          })}
        </Select>
        <Select
          name="role"
          value={role}
          onChange={updateFilterValue}
          displayEmpty
          sx={{
            fontFamily: "inherit",
            "& .MuiSvgIcon-root": {
              borderLeft: "1px solid #000",
            },
          }}
          renderValue={(val) => {
            if (val.length == 0) return <span style={{ color: "#d0d0d0" }}>Role</span>;
            return (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {val.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            );
          }}
          multiple
          placeholder="Role"
          fullWidth
        >
          {ROLES.map((type) => {
            return (
              <MenuItem value={type} key={type}>
                {type}
              </MenuItem>
            );
          })}
        </Select>
      </form>
    </Container>
  );
};

export const Filter = memo(FilterSection);
