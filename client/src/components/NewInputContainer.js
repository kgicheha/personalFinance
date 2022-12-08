import React, { useState } from "react";
import { styled, Typography } from "@mui/material";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField,
  Button,
  Checkbox,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { Container } from "@mui/system";
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const NewInputContainer = () => {
  //storing data from the form
  const { register, handleSubmit } = useForm();
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState(dayjs('2014-08-18T21:11:54'));

  const handleChange = (event, newValue) => {
    setChecked(event.target.checked);
    setValue(newValue);
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
  const CustomContainer = styled(Container)({
    paddingBottom: "1em",
    paddingTop: "1em",
    // width: "100%",
    backgroundColor: "#f6f6f6",
  });

  // CUSTOM CSS ^^
  return (
    <>
      <CustomContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl id="recurring" sx={{ maxWidth: 120 }}>
            <Checkbox
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
            <Typography>recurring</Typography>
          </FormControl>
          <FormControl id="addType" sx={{ minWidth: 90 }}>
            <InputLabel>Select</InputLabel>
            <Select label="Select" id="inputType" {...register("type")}>
              <MenuItem id="income" value="positive">
                +
              </MenuItem>
              <MenuItem id="expense" value="negative">
                -
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl id="addDescription" sx={{ maxWidth: 200 }}>
            <TextField
              id="descriptionInput"
              placeholder="add description"
              variant="outlined"
              {...register("description")}
            />
          </FormControl>
          <FormControl id="addValue" sx={{ maxWidth: 120 }}>
            <TextField
              id="amountInput"
              placeholder="amount"
              type="number"
              variant="outlined"
              {...register("amount")}
            />
          </FormControl>
{
  checked ?
          <FormControl>
          <LocalizationProvider dateAdapter={AdapterDayjs}>

        <DesktopDatePicker
          label="Date desktop"
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
         </LocalizationProvider>
          </FormControl>
          :null
}
          <CustomButton
            id="submitButton"
            type="submit"
            size="large"
            variant="contained"
          >
            Submit
          </CustomButton>
        </form>
      </CustomContainer>
    </>
  );
};

export default NewInputContainer;
