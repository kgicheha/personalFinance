import React from "react";
import { Typography, Container, Stack } from "@mui/material";
import TotalIncome from "./TotalIncome";
import TotalExpense from "./TotalExpense";

const BudgetSummary = () => {
  return (
    <>
      <Container id="budgetSummary">
        <TotalIncome />
        <TotalExpense />
      </Container>
    </>
  );
};

export default BudgetSummary;
