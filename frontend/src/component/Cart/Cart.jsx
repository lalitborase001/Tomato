import React, { useState } from "react";
import {
  Button,
  Divider,
  Card,
  Modal,
  Box,
  Grid,
  TextField,
} from "@mui/material";
import { AddLocation } from "@mui/icons-material";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import { Formik, Field, ErrorMessage, Form } from "formik";

import CartItem from "./CartItem";
import AddressCard from "./AddressCard";

export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
  outline: "none",
};

const initialValues = {
  streetAddress: "",
  city: "",
  state: "",
  pincode: "",
};

const validationSchema = Yup.object({
  streetAddress: Yup.string().required("Street Address is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  pincode: Yup.string()
    .required("Pincode is required")
    .matches(/^\d{6}$/, "Pincode must be 6 digits"),
});

const Cart = () => {
  const [open, setOpen] = useState(false);

  // Select only the cart slice
  const cart = useSelector((state) => state.cart);

  const handleOpenAddressModel = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const createOrderUsingSelectedAddress = () => {};

  const handleSubmit = (values) => {
    console.log(values);
    setOpen(false);
  };

  return (
    <>
      <main className="lg:flex justify-between">

        {/* Left Section */}
        <section className="lg:w-[35%] space-y-6 pt-10 px-5">

          {cart?.cartItems?.length > 0 ? (
            cart.cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
              />
            ))
          ) : (
            <div className="text-center py-20 text-gray-500">
              Your cart is empty
            </div>
          )}

          <Divider />

          <div className="space-y-3">

            <h2 className="font-semibold text-lg">
              Bill Details
            </h2>

            <div className="flex justify-between">
              <span>Item Total</span>
              <span>$64.95</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>$5.00</span>
            </div>

            <div className="flex justify-between">
              <span>GST & Restaurant Charges</span>
              <span>$8.12</span>
            </div>

            <Divider />

            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>$78.07</span>
            </div>

          </div>

        </section>

        <Divider orientation="vertical" flexItem />

        {/* Right Section */}

        <section className="lg:w-[65%] px-5 py-10">

          <h1 className="text-2xl font-semibold text-center mb-8">
            Choose Delivery Address
          </h1>

          <div className="flex flex-wrap gap-5 justify-center">

            {[1, 2, 3].map((item, index) => (
              <AddressCard
                key={index}
                item={item}
                showButton
                handleSelectAddress={
                  createOrderUsingSelectedAddress
                }
              />
            ))}

            <Card className="w-64 p-5 flex flex-col items-center justify-center space-y-3">

              <AddLocation fontSize="large" />

              <h2 className="font-semibold">
                Add New Address
              </h2>

              <Button
                variant="outlined"
                fullWidth
                onClick={handleOpenAddressModel}
              >
                Add Address
              </Button>

            </Card>

          </div>

        </section>

      </main>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>

              <Grid container spacing={2}>

                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="streetAddress"
                    label="Street Address"
                    fullWidth
                  />

                  <ErrorMessage
                    name="streetAddress"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    fullWidth
                    type="submit"
                  >
                    Deliver Here
                  </Button>
                </Grid>

              </Grid>

            </Form>
          </Formik>
        </Box>
      </Modal>
    </>
  );
};

export default Cart;