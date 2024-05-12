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
    salary: null,
    role: [],
  },
};

export const FilterContextProvider = ({ children }) => {
  const products = useMemo(() => {
    return getSampleJdJSON();
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);
  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  };

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
  }, [products, state.filters]);

  // to load all the products for grid and list view
  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        sorting,
        updateFilterValue,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
