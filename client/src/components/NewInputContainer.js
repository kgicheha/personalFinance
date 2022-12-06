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
    <Box sx={{ minWidth: 120 }}>
      <FormControl
      // fullWidth
      >
        <InputLabel>Select</InputLabel>
        <Select onChange={handleChange}>
          <MenuItem>+</MenuItem>
          <MenuItem>-</MenuItem>
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
    </Box>
  );
};

export default NewInputContainer;
