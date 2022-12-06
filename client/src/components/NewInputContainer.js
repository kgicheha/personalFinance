import React from "react";
import { styled } from "@mui/material";
import { red } from "@mui/material/colors";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField,
  Button,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { Container } from "@mui/system";

const NewInputContainer = () => {
  //storing data from the form
  const { register, handleSubmit } = useForm();

  const handleChange = () => {
    console.log("Hello");
  };
  const onSubmit = (data) => {
    console.log(data);
  };

  // CUSTOM CSS
  const CustomButton = styled(Button)({
    fontWeight: "bold",
    backgroundColor: "#178fff",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#1480e5",
    },
  });
  // CUSTOM CSS ^^
  return (
    <>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl id="addType" sx={{ minWidth: 120 }}>
            <InputLabel>Select</InputLabel>
            <Select label="Select" {...register("type")}>
              <MenuItem id="income" value="positive">
                +
              </MenuItem>
              <MenuItem id="expense" value="negative">
                -
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl id="addDescription">
            <TextField
              placeholder="add description"
              variant="outlined"
              {...register("description")}
            />
          </FormControl>
          <FormControl id="addValue">
            <TextField
              placeholder="amount"
              type="number"
              variant="outlined"
              {...register("amount")}
            />
          </FormControl>
          <CustomButton id="submitButton" type="submit" size="large" variant="contained">
            Submit
          </CustomButton>
        </form>
      </Container>
    </>
  );
};

export default NewInputContainer;
