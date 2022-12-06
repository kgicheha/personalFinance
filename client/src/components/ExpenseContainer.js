import React from "react";
import ExpenseDetails from "./ExpenseDetails";
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
  expense categories: housing, healthcare/medical, entertainment, transportation,
              education, debt/loans, household supplies, personal care, clothing,
              utilities, food/drinks, travel, gift and donations, pets, miscellaneous
              saving/investing
  */

const ExpenseContainer = () => {
  const expenses = [
    {
      id: 1,
      description: "Rent",
      amount: 1000.0,
      category: "housing",
      recurring: true,
      frequency: "monthly",
    },
    {
      id: 2,
      description: "Phone Bill",
      amount: 55.0,
      category: "utilities",
      recurring: true,
      frequency: "monthly",
    },
    {
      id: 3,
      description: "Gas",
      amount: 40.0,
      category: "transportation",
      recurring: true,
      frequency: "weekly",
    },
  ];

  const renderExpenses = () =>
    expenses.map((expense) => (
      <ExpenseDetails key={expense.id} expense={expense} />
    ));

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 100 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell id="expenseTableHeader">EXPENSES</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{renderExpenses()}</TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ExpenseContainer;
