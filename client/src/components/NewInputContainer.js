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

const NewInputContainer = () => {
  const handleChange = () => {
    console.log("Hello");
  };
  return (
      <FormControl>
      <InputLabel>Select</InputLabel>
        <Select label="Select" onChange={handleChange}>
          <MenuItem id="income">+</MenuItem>
          <MenuItem id="expense">-</MenuItem>
        </Select>
        <Input
          id="addDescription"
          placeholder="Add description"
          // sx={{size:"large"}}
        />
        <Input
          id="addValue"
          placeholder="value"
          type="number"
        />
      </FormControl>
  );
};

export default NewInputContainer;
