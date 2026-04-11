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
              fullWidth
              variant="outlined"
              margin="normal"
            />
          <Field
              as={TextField}
              name="email"
              label="Email"
              fullWidth
              variant="outlined"
              margin="normal"
            />
            <Field
              as={TextField}
              name="password"
              label="Password"
              fullWidth
              variant="outlined"
              margin="normal"
            />
            <FormControl fullWidth margin="normal">
              <InputLabel id="role-simple-select-label">Role</InputLabel>
              <Field
              as={Select}
                labelId="role-simple-select-label"
                id="role-simple-select"
                //value={age}
                name="role"
                //onChange={handleChange}
              >
                <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
                <MenuItem value={"ROLE_RESTAURANT_OWNER"}>Restaurant Owner</MenuItem>
              </Field>
            </FormControl>
            <Button sx={{mt:2,padding:'1rem'}}  className='mt-5' fullWidth type='submit' variant='contained'>Register</Button>
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