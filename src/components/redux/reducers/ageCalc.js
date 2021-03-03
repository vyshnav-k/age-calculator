
const initailState = {
  dob: "",
  age:''
};

export default (state = initailState, action) => {
  switch (action.type) {
    case 'CALCULATE_AGE': {
      var dob = action.dob;
       dob = new Date(dob)
      var month_diff = Date.now() - dob.getTime();
      var age_dt = new Date(month_diff);
      var year = age_dt.getUTCFullYear();
      var age = Math.abs(year - 1970);
      console.log("age is");
      console.log(age);
      return {
        age,
      };
    }

    default:
      return {
        state,
      };
  }
};
