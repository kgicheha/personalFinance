import React from 'react'
import {Box, InputLabel, MenuItem, FormControl,Select, TextField } from '@mui/material';


const NewInputContainer = () => {
    const handleChange =()=>{
        console.log("Hello")
    }
  return (
    <Box sx={{ minWidth: 120 }}>
    <FormControl fullWidth>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        // value={type}
        label="Type"
        onChange={handleChange}
      >
        <MenuItem>-</MenuItem>
        <MenuItem>+</MenuItem>
      </Select>
      <TextField id="addDescription" placeholder="Add description" variant="outlined" />
      <TextField id="addValue" placeholder="value" variant="outlined" />
    </FormControl>
  </Box>
  )
}

export default NewInputContainer