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
  const { id, description, amount, category, recurring, frequency } = expense;
  return (
    <>
      <TableRow key={id}>
        <TableCell component="th" scope="row">
          {description}
        </TableCell>
        <TableCell id="expenseAmount" align="right">
          -{amount.toLocaleString("en-US", { minimumFractionDigits: 2 })}
        </TableCell>
      </TableRow>
    </>
  );
};

export default ExpenseDetails;
