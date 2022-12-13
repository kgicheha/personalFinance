import React from "react";

import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const TotalIncome = () => {
  return (
    <div>
      <Card sx={{ maxWidth: 275, minHeight: 175, maxHeight: 175, mb: 2 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            TOTAL INCOME
          </Typography>
          <Typography sx={{ fontSize: 16 }} id="incomeSummary">
            + 5,000.00
          </Typography>
          <Typography className="incomePercentChange" >
          <TrendingUpIcon />
            +15.00 %
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
export default TotalIncome;
