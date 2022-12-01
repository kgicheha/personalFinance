import React from "react";
import { styled } from "@mui/material/styles";
import { TableRow } from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

const IncomeDetails = ({ inc }) => {
  const { id, description, amount, category, recurring } = inc;

  const CustomTableRow = styled(TableRow)({
    "&:nth-of-type(even)": {
      backgroundColor: "#f6f6f6",
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  });
  return (
    <>
      <CustomTableRow key={id}>
        <TableCell component="th" scope="row">
          {description}
        </TableCell>
        <TableCell id="incomeAmount" align="right">
          -{amount.toLocaleString("en-US", { minimumFractionDigits: 2 })}
        </TableCell>
      </CustomTableRow>
    </>
  );
};

export default IncomeDetails;
