import { Field } from 'formik'
import React from 'react'

const initialValues={
  fullName:"",
  email:"",
  password:"",
  role:"ROLE_CUSTOMER"
}
export default function RegisterForm() {
  const navigate = useNavigate()
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
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Role</InputLabel>
              <Field
              as={Select}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                //value={age}
                label="Age"
                //onChange={handleChange}
              >
                <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
                <MenuItem value={"ROLE_RESTAURANT_OWNER"}>Restaurant Owner</MenuItem>
              </Select>
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

export default RegisterForm