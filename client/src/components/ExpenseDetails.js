import React from "react";
import { styled } from "@mui/material/styles";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

const ExpenseDetails = ({ expense }) => {

    const {id, description, value, category, recurring, frequency} = expense
  return (
    <div>
      <TableBody>
          <TableRow key={id}>
            <TableCell component="th" scope="row">
              {description}
            </TableCell>
            <TableCell align="right">${value}</TableCell>
          </TableRow>
      </TableBody>
    </div>
  );
};

export default ExpenseDetails;
