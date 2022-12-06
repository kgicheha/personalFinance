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
      <InputLabel>Select</InputLabel>
      <Select
        id="addType"
        label="Select"
        {...register("type")}
        onChange={handleChange}
      >
        <MenuItem id="income" value="positive">
          +
        </MenuItem>
        <MenuItem id="expense" value="negative">
          -
        </MenuItem>
      </Select>
      <div id="addDescription">
        <TextField
          placeholder="Add description"
          variant="outlined"
          {...register("description")}
        />
      </div>
      <div id="addValue">
        <Input
          placeholder="amount"
          type="number"
          variant="outlined"
          {...register("amount")}
        />
      </div>
    </form>
  );
};

export default NewInputContainer;
