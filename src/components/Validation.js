const validation = (values) => {
  let errors = {};
  if (!values.username) {
    errors.username = "Username is required!";
  }
  if (!values.email) {
    errors.email = " Email is required!";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email is wrong!";
  }
  if (!values.password) {
    errors.password = "Password is required!";
  } else if (values.password.length < 4) {
    errors.password = "Password is to short!";
  }
  return errors;
};

export default validation;
