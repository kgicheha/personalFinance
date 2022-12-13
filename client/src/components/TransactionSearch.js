import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  styled,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField,
  Button,
  Checkbox,
} from "@mui/material";
import { Container } from "@mui/system";
import { useForm } from "react-hook-form";

const TransactionSearch = () => {
  const { register, handleSubmit } = useForm();
  // CUSTOM CSS
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
        <form>
          <FormControl id="addType" sx={{ minWidth: 90 }}>
            <InputLabel>Select</InputLabel>
            <Select label="Select" id="inputType" {...register("type")}>
              <MenuItem id="income" value="income">
                Income
              </MenuItem>
              <MenuItem id="expense" value="expense">
                Expense
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl id="searchMyTransaction" sx={{ maxWidth: 250 }}>
            <SearchIcon />
            <TextField
              id="descriptionInput"
              placeholder="search my transactions"
              variant="outlined"
              {...register("description")}
            />
          </FormControl>
        </form>
      </CustomContainer>
    </>
  );
};

export default TransactionSearch;
