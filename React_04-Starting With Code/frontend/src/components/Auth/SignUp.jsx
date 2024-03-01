import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { SignUpValidate } from "../../utils/AuthValidate";
import InputField from "../../HOC/InputField";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function SignUp() {
  const navigate = useNavigate();
  const Formik = useFormik({
    initialValues: initialValues,
    validationSchema: SignUpValidate,
    onSubmit: (values, action) => {
      const userStoredInfo = JSON.parse(localStorage.getItem("userInfo")) || {};
      if (
        userStoredInfo.email === values.email &&
        userStoredInfo.password === values.password
      ) {
        console.log("already a user go to login page");
      } else {
        if (typeof window !== "undefined" && window.localStorage) {
          localStorage.setItem("userInfo", JSON.stringify(values));
        }
        navigate("/");
      }
      action.resetForm();
    },
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    Formik;

  return (
    <div className="flex w-[500px] min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Please create an account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <InputField
            label="Name"
            name="name"
            type="text"
            autoComplete="off"
            value={values.name}
            onBlur={handleBlur}
            onChange={handleChange}
            error={errors.name}
            touched={touched.name}
          />

          <InputField
            label="Email address"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
            error={errors.email}
            touched={touched.email}
          />

          <InputField
            label="Password"
            name="password"
            type="password"
            autoComplete="password"
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
            error={errors.password}
            touched={touched.password}
          />

          <InputField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            autoComplete="password"
            value={values.confirmPassword}
            onBlur={handleBlur}
            onChange={handleChange}
            error={errors.confirmPassword}
            touched={touched.confirmPassword}
          />

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign up
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            to={"/login"}
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Sign in now
          </Link>
        </p>
      </div>
    </div>
  );
}
