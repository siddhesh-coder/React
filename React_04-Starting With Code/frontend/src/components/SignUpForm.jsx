import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less*")
          .required("Required*"),
        lastName: Yup.string()
          .max(20, "Must be 20 characters or less*")
          .required("Required*"),
        email: Yup.string().email("Invalid email address*").required("Required*"),
        password: Yup.string()
          .required("No password provided*")
          .min(8, "Password is too short - should be 8 chars minimum*")
          .matches(/[a-zA-Z]/, "Password can only contain Latin letters*"),
      })}
      onSubmit={ async (values, { setSubmitting }) => {
          localStorage.setItem("firstName", values.firstName);
          localStorage.setItem("lastName", values.lastName);
          localStorage.setItem("email", values.email);
          localStorage.setItem("password", values.password);
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            navigate('/');
          }, 400);
      }}
    >
      <Form className="form">
        <label className="label" htmlFor="firstName">
          First name
        </label>
        <Field className="field" name="firstName" type="text" />
        <div className="error-msg">
          <ErrorMessage name="firstName" />
        </div>

        <label className="label" htmlFor="lastName">
          Last name
        </label>
        <Field className="field" name="lastName" type="text" />
        <div className="error-msg">
          <ErrorMessage className="error-msg" name="lastName" />
        </div>

        <label className="label" htmlFor="email">
          Email
        </label>
        <Field className="field" name="email" type="email" />
        <div className="error-msg">
          <ErrorMessage className="error-msg" name="email" />
        </div>

        <label className="label" htmlFor="password">
          Password
        </label>
        <Field className="field" name="password" type="password" />
        <div className="error-msg">
          <ErrorMessage className="error-msg" name="password" />
        </div>

        <button className="user-btn" type="submit">
          Submit
        </button>
        <button className="user-btn" type="reset">
          Reset
        </button>
      </Form>
    </Formik>
  );
};

export default SignupForm;
