const initailState = {
  dob: "",
  age: "",
  category: "",
};

export default (state = initailState, action) => {
  switch (action.type) {
    case "CALCULATE_AGE": {
      var dob = action.dob.dob;
      var userDob = Date.parse(dob);
      var currentDate = Date.now();
      var ageMilli = currentDate - userDob;
      var minutes = 1000 * 60;
      var hours = minutes * 60;
      var days = hours * 24;
      var years = days * 365;
      var age = Math.round(ageMilli / years);
        var category = "";
        if (age <= 19) {
          category = "Teen Ager";
        } else if (age <= 60) {
          category = "Middle aged";
        } else {
          category = "Elder";
        }

      console.log(age);
      return {
        age,category
      };
    }
     
    default:
      return {
        state,
      };
  }
};
