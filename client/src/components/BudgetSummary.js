import React from "react";
import { Typography, Container, Stack } from "@mui/material";
import TotalIncome from "./TotalIncome";

const BudgetSummary = () => {
  return (
    <>
      <Container id="budgetSummary">
      <TotalIncome />
        {/* <Stack>
          <Typography>Available Budget in December 2022</Typography>
          <Typography>+ 2000.00</Typography>
          <Container id="incomeSummary">
            <Typography>INCOME</Typography>
            <Typography className="summaryAmount">+ 5000.00</Typography>
          </Container>
          <Container id="expenseSummary">
            <Typography>EXPENSES</Typography>
            <Typography className="summaryAmount">- 3000.00</Typography>
          </Container>
        </Stack> */}
      </Container>
    </>
  );
};

export default BudgetSummary;
