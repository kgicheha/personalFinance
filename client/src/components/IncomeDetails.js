import React from "react";
import { styled } from "@mui/material/styles";
import { TableRow } from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

const IncomeDetails = ({ inc }) => {
  console.log(inc);
  const { id, description, amount, category, recurring } = inc;

  return (
    <>
      <TableRow key={id}>
        <TableCell component="th" scope="row">
          {description}
        </TableCell>
        <TableCell id="incomeAmount" align="right">
          -{amount.toLocaleString("en-US", { minimumFractionDigits: 2 })}
        </TableCell>
      </TableRow>
    </>
  );
};

export default IncomeDetails;
