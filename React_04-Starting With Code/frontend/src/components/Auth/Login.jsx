import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { LoginValidate } from "../../utils/AuthValidate";
import InputField from "../../HOC/InputField";
import Credentials from "./Credentials";
import { useDispatch } from "react-redux";
import { login } from "../../utils/Store/authSlice";
import useNotify from "../../hooks/useNotify.js";
import toast from "react-hot-toast";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const notify = useNotify();

  const Formik = useFormik({
    initialValues: initialValues,
    validationSchema: LoginValidate,
    onSubmit: (values, action) => {
      const userStoredInfo = JSON.parse(localStorage.getItem("userInfo")) || {};

      if (
        userStoredInfo.email === values.email &&
        userStoredInfo.password === values.password
      ) {
        dispatch(login(true));
        notify({ message: "Successfully logged In" });
        navigate("/");
      } else {
        const notifyError = () => toast.error("Please check email or password", { style: { backgroundColor: "rgb(0,0,0,90)", color: "white", fontWeight: "600" } });
        notifyError();
      }
      action.resetForm();
    },
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    Formik;

  return (
    <>
      <div data-testid="login-window" className="flex mt-20 w-[400px] min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="w-auto h-10 mx-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">
            Login to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
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
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Log in
              </button>
            </div>
          </form>

          <p className="mt-10 text-sm text-center text-gray-500">
            Don't have Account?{" "}
            <Link
              to={"/signup"}
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Sign up now
            </Link>
          </p>
        </div>
      </div>
      <Credentials />
    </>
  );
};

export default Login;
