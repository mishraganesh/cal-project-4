export const emailValidation = (email) => {
    const emailRegix = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (emailRegix.test(email)) {
      return "true";
    } else {
      return "false";
    }
  };
  
 
  
  export const userNameValidations = (userName) => {
    const userRegix = /^[a-zA-Z0-9]+([_\s/\-]?[a-zA-Z0-9])*$/;
    if(userRegix.test(userName)){
      return "true"
    }else {
      return "false"
    }
  }
  export const userAgeValidation=(age)=>{
    const ageRegix= /^[1-9]\d{0,1}(\.\d{0})*(,\d+)?$/;
    if (ageRegix.test(age)){
        return "true"
    }
    else{
        return "false"
    }
  }
  