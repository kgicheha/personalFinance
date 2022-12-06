import React from "react";
import IncomeDetails from "./IncomeDetails";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableCell
} from "@mui/material";

/*
catergory: salary, investments
*/
const IncomeContainer = () => {
  const income = [
    {
      id: 1,
      description: "Salary",
      amount: 5000.00,
      category: "salary",
      recurring: true,
    },
    {
      id: 2,
      description: "Dividends",
      amount: 300.00,
      category: "investments",
      recurring: true,
    },
  ];

  const renderIncome = () =>
    income.map((inc) => (
      <IncomeDetails key={inc.id} inc={inc} />
    ));
  return (
      <>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 100 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <TableCell id="incomeTableHeader">INCOME</TableCell>
                <TableCell id="incomeTableHeader"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{renderIncome()}</TableBody>
          </Table>
        </TableContainer>
      </>

  );
};

export default IncomeContainer;
