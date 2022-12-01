import React from 'react'
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


const IncomeDetails = ({inc}) => {
    console.log(inc)

    const {id, description, amount, category, recurring } = inc

  return (
    <div>
      <TableBody>
          <TableRow key={id}>
            <TableCell component="th" scope="row">
              {description}
            </TableCell>
            <TableCell id="expenseAmount" align="right">-{amount.toLocaleString("en-US", {minimumFractionDigits: 2})}</TableCell>
          </TableRow>
      </TableBody>
    </div>
  )
}

export default IncomeDetails