import { createContext, useContext, useReducer, useEffect, useMemo } from "react";
import { getSampleJdJSON } from "../data/dummyData";
import reducer from "../reducers/filterReducer";

const FilterContext = createContext();

const initialState = {
  filter_jobs: [],
  all_jobs: [],
  filters: {
    companyName: "",
    location: "",
    locationType: "",
    salary: 0,
    role: [],
  },
};

export const FilterContextProvider = ({ children }) => {
  const jobs = useMemo(() => {
    return getSampleJdJSON();
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);
  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  };
  const clearFilterValue = (name) => {
    return dispatch({ type: "CLEAR_FILTERS_VALUE", payload: { nameType: name } });
  };
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
  }, [jobs, state.filters]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: jobs });
  }, [jobs]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        updateFilterValue,
        clearFilterValue,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
