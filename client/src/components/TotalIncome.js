import React from "react";

import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";

const TotalIncome = () => {
  return (
    <div>
      <Card sx={{ maxWidth: 275, minHeight: 175, maxHeight: 175 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            TOTAL INCOME
          </Typography>

          <Typography id="incomeSummary">+ 5000.00</Typography>
        </CardContent>
      </Card>
    </div>
  );
};
export default TotalIncome;
