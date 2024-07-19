import { Button, Paper, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./LoginComponent.scss";
import { Navigate, useNavigate } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";
import { useFormik } from "formik";
import useAuth from "../hooks/UseAuth";
import * as yup from 'yup';

const LoginComponent = () => {
  // const [isAuthenticated ,setAuth] = useState(false);
  const navigate = useNavigate();
  const isAuthenticated = useAuth();
  useEffect(() => {
    // if (isAuthenticated) {
    //         navigate('/Pages')
    //     }
  }, []);

  const validationSchema = yup.object({
    email:yup
    .string('Enter Your Email')
    .email('Enter Valid Email')
    .required('Email is required'),
    password:yup
    .string('Enter Password')
    .min(8,'Password should be atleast 8 characters length')
    .required('Password is requird')
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '', 
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
    //Login Api call

    localStorage.setItem("token","some-token");
    navigate("/pages")
    },
  });
  return (
    <div className="login-component">
      <Paper elevation={3} className="form-container">
        <form className="d-flex align-items-center flex-column" onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id="email"
            type="email"
            name="email"
            label="Email"
            className="mb-3"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          ></TextField>
          <TextField
            fullWidth
            id="password"
            type="password"
            name="password"
            label="Password"
            className="mb-3"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          ></TextField>
          <Button variant="contained" className="btn" type="submit">Login</Button>
        </form>
      </Paper>
    </div>
  );
};

export default LoginComponent;
