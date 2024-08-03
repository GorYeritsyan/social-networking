import Button from "../components/Button";
import Input from "../components/Input";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { useEffect } from "react";
import { fetchLogin } from "../store/slices/authSlice";
import { Navigate, useNavigate } from "react-router-dom";
import { LoginType } from "../types/types";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function authUser(values: LoginType) {
    dispatch(fetchLogin(values));
  }
  
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Not a valid email address")
      .required("This field is required"),
    password: Yup.string()
      .min(6, "At least 6 letters")
      .max(20, "Too long. Max 20 letters")
      .matches(
        /[A-Z]{1,}[a-z]{1,}[1-9]/,
        "Password need to contain number, uppercase, lowercase and symbol ($,!,#..)"
      )
      .required("This field is required"),
  });

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values) => authUser(values)}
          validationSchema={validationSchema}
        >
          {() => (
            <Form className="space-y-5">
              <Input type="email" labelName="Email address" />
              <Input type="password" labelName="Password" />
              <Button />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
