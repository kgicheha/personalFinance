import React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

const TotalExpense = () => {
  return (
    <div>
      <Card sx={{ maxWidth: 275, minHeight: 175, maxHeight: 175 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            TOTAL EXPENSE
          </Typography>
          <Typography sx={{ fontSize: 16 }} id="expenseSummary">
          - 3000.00
          </Typography>
          <Typography className="expensePercentChange">
            <TrendingDownIcon />
            +15.00 %
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default TotalExpense;
