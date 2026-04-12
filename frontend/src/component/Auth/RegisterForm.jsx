import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { TextField, Button, Typography, MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import React from 'react'

const initialValues={
  fullName:"",
  email:"",
  password:"",
  role:"ROLE_CUSTOMER"
}
const RegisterForm = () => {
  const navigate = useNavigate()
  const handleSubmit = (values) => {
    console.log("form values", values)
  };
  return (
    <div>
      <Typography variant="h5" className="text-center">
        Register
      </Typography>

      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>

          <Field
            as={TextField}
            name="fullName"
            label="Full Name"
            variant="outlined" 
            fullWidth
            margin="normal"
            InputProps={{ style: { color: "black" } }}
            InputLabelProps={{ style: { color: "black" } }}
          />

          <Field
            as={TextField}
            name="email"
            label="Email"
            variant="outlined" 
            fullWidth
            margin="normal"
            InputProps={{ style: { color: "black" } }}
            InputLabelProps={{ style: { color: "black" } }}
          />

          <Field
            as={TextField}
            name="password"
            label="Password"
            type="password"
            variant="outlined" 
            fullWidth
            margin="normal"
            InputProps={{ style: { color: "black" } }}
            InputLabelProps={{ style: { color: "black" } }}
          />

          <FormControl fullWidth margin="normal" variant="outlined">
            <InputLabel>Role</InputLabel>
            <Field as={Select} name="role" label="Role">
              <MenuItem value="ROLE_CUSTOMER">Customer</MenuItem>
              <MenuItem value="ROLE_RESTAURANT_OWNER">Restaurant Owner</MenuItem>
            </Field>
          </FormControl>

          <Button fullWidth type="submit" variant="contained" sx={{ mt: 2, p: 1.5 }}>
            Register
          </Button>

        </Form>
      </Formik>
      <Typography variant='body2' align='center' sx={{ mt: 3 }}>
        If have an account already?
        <Button size='small' onClick={() => navigate("/account/login")}>
          login
        </Button>
      </Typography>
    </div>
  )
}

export default RegisterForm;