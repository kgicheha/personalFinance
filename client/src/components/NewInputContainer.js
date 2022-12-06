import React from "react";
import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField,
} from "@mui/material";

const NewInputContainer = () => {
  const handleChange = () => {
    console.log("Hello");
  };
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem>+</MenuItem>
          <MenuItem>-</MenuItem>
        </Select>
        <TextField
          id="addDescription"
          placeholder="Add description"
          variant="outlined"
        />
        <TextField id="addValue" placeholder="value" variant="outlined" />
      </FormControl>
    </Box>
  );
};

export default NewInputContainer;
