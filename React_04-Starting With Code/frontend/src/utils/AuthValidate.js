import * as Yup from "yup";

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

export const SignUpValidate = Yup.object({
  name: Yup.string().min(4, "minimum 4 characters").max(25, 'maximum 25 characters').required("Please enter your name"),
  email: Yup.string().email("Invalid email address*").required("Please enter your email"),
  password: Yup.string()
    .required("Please enter your password")
    .min(8, "Password is too short - should be 8 chars minimum")
    .matches(passwordRegex, "Password must contain at least one letter, one number, and one special character"),
  confirmPassword: Yup.string().required("Please re-enter password").oneOf([Yup.ref("password"), null], "password must match")
});

export const LoginValidate = Yup.object({
  email: Yup.string().email("Invalid email address*").required("Please enter your email"),
  password: Yup.string()
    .required("Please enter your password")
    .min(8, "Password is too short - should be 8 chars minimum")
    .matches(passwordRegex, "Password must contain at least one letter, one number, and one special character")
})
