import React from 'react'
import { useNavigate } from "react-router-dom";
import { Typography, TextField, Button } from "@mui/material";
import { Formik, Form, Field } from "formik";

const initialValues={
  email:"",
  password:""
}
export const LoginForm = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
  }
  return (
    <div>
      <Typography variant="h5" className="text-center">
        Login
      </Typography>

      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <Field
              as={TextField}
              name="email"
              label="Email"
              fullWidth
              variant="outlined"
              margin="normal"
              InputProps={{ style: { color: "black" } }}
              InputLabelProps={{ style: { color: "black" } }}
            />
            <Field
              as={TextField}
              name="password"
              label="Password"
              fullWidth
              variant="outlined"
              margin="normal"
              InputProps={{ style: { color: "black" } }}
              InputLabelProps={{ style: { color: "black" } }}
            />
            <Button sx={{mt:2,padding:'1rem'}}  className='mt-5' fullWidth type='submit' variant='contained'>Login</Button>
        </Form>
      </Formik>
      <Typography variant='body2' align='center' sx={{ mt: 3 }}>
        Don't have an account?
        <Button size='small' onClick={() => navigate("/account/register")}>
          register
        </Button>
      </Typography>
    </div>
  )
}

export default LoginForm