import React from 'react'
import {Box, InputLabel, MenuItem, FormControl,Select, TextField } from '@mui/material';


const NewInputContainer = () => {
    const handleChange =()=>{
        console.log("Hello")
    }
  return (
    <Box sx={{ minWidth: 120 }}>
    <FormControl fullWidth>
      {/* <InputLabel id="type">Type</InputLabel> */}
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
      <TextField id="addDescription" label="Add description" variant="outlined" />
      <TextField id="addValue" label="value" variant="outlined" />
    </FormControl>
  </Box>
  )
}

export default NewInputContainer