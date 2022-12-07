import React from "react";
import { Typography, Container, Stack } from "@mui/material";

const BudgetSummary = () => {
  return (
    <>
      <Container id="budgetSummary">
        <Stack>
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
        </Stack>
      </Container>
    </>
  );
};

export default BudgetSummary;
