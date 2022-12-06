import React from "react";
import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField,
  Input,
} from "@mui/material";
import { useForm } from "react-hook-form";

const NewInputContainer = () => {
  //storing data from the form
  const { register, handleSubmit } = useForm();

  const handleChange = () => {
    console.log("Hello");
  };
  const onSubmit = () => {
    console.log("Hello");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl id="addType" sx={{ minWidth: 120 }}>
        <InputLabel>Select</InputLabel>
        <Select label="Select" {...register("type")} onChange={handleChange}>
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
          placeholder="Add description"
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
    </form>
  );
};

export default NewInputContainer;
