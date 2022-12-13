import React, { useState } from "react";
import { Tab, Tabs, Box, Button } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { styled } from "@mui/material";
import BudgetSummary from "./BudgetSummary";
import NewInputContainer from "./NewInputContainer";
import IncomeContainer from "./IncomeContainer";
import ExpenseContainer from "./ExpenseContainer";
import TransactionSearch from "./TransactionSearch";

const MenuBar = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    activeTab(newValue);
  };

  //SWITCH STATEMENT
  const activeTab = (value) => {
    console.log(value);
    // switch (value) {
    //   case
    // }
  };
  // CUSTOM CSS
  const CustomTab = styled(Tab)({
    "&:hover": {
      fontWeight: "bold",
    },
  });
  //CUSTOM CSS
  return (
    <div>
      <Box sx={{ width: "100%", my: 2 }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              centered
            >
              <CustomTab value="OVERVIEW" label="OVERVIEW" />
              <CustomTab value="GOALS" label="GOALS" />
              <CustomTab value="ANALYSIS" label="ANALYSIS" />
              <CustomTab value="TRANSACTIONS" label="TRANSACTIONS" />
              <CustomTab value="NEW TRANSACTION" label="NEW TRANSACTION" />
            </TabList>
          </Box>
          <TabPanel value="OVERVIEW">
            <BudgetSummary />
          </TabPanel>
          <TabPanel value="GOALS">GOALS</TabPanel>
          <TabPanel value="ANALYSIS">ANALYSIS</TabPanel>
          <TabPanel value="TRANSACTIONS">
            <TransactionSearch />
            <div id="transactionHistory">
              <IncomeContainer />
              <ExpenseContainer />
            </div>
          </TabPanel>
          <TabPanel value="NEW TRANSACTION">
            <NewInputContainer />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default MenuBar;
