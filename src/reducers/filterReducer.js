const filterReducer = (state, action) => {
    switch (action.type) {
      case "LOAD_FILTER_PRODUCTS":
        return {
          ...state,
          filter_jobs: [...action.payload],
          all_jobs: [...action.payload],
        };
  
      case "UPDATE_FILTERS_VALUE":
        const { name, value } = action.payload;
  
        return {
          ...state,
          filters: {
            ...state.filters,
            [name]: value,
          },
        };
  
      case "FILTER_PRODUCTS":
        let { all_jobs } = state;
        let tempFilterJob = [...all_jobs];
  
        const {companyName,location,locationType,salary,role } = state.filters;
  
        if (companyName) {
          tempFilterJob = tempFilterJob.filter((curElem) => {
            return curElem.companyName.toLowerCase().includes(companyName);
          });
        }
  
        if (location) {
          tempFilterJob = tempFilterJob.filter(
            (curElem) => curElem.location.toLowerCase().includes(location)
          );
        }
        if (salary) {
          tempFilterJob = tempFilterJob.filter(
            (curElem) => {
              console.log(curElem.minJdSalary,curElem.maxJdSalary);
              if(curElem.maxJdSalary){
                return curElem.maxJdSalary<=salary;
              }
              else if(curElem.minJdSalary){
                return curElem.minJdSalary<=salary;
              }
              else{
                return true;
              }
            }
          );
        }
        if (locationType) {
          tempFilterJob = tempFilterJob.filter(
            (curElem) => {
                if(locationType==="REMOTE"){
                    return curElem.location.toLowerCase().includes("remote")
                }
                else{
                    return curElem.location.toLowerCase()!=="remote"
                }
            }
          );
        }
        if(role.length>0){
          tempFilterJob = tempFilterJob.filter(
            (curElem) => role.includes(curElem.jobRole)
          );
        }
        return {
          ...state,
          filter_jobs: tempFilterJob,
        };
  
      default:
        return state;
    }
  };
  
  export default filterReducer;