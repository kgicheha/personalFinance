import React, { useState } from "react";
import { Tab, Tabs, Box, Button } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { styled } from "@mui/material";
import BudgetSummary from "./BudgetSummary";
import NewInputContainer from "./NewInputContainer";
import IncomeDetails from "./IncomeDetails";
import ExpenseDetails from "./ExpenseDetails";

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
              <CustomTab value="TRANSACTIONS" label="TRANSACTIONS" />
              <CustomTab value="NEW TRANSACTION" label="NEW TRANSACTION" />
            </TabList>
          </Box>
          <TabPanel value="OVERVIEW">
            <BudgetSummary />
          </TabPanel>
          <TabPanel value="GOALS">GOALS</TabPanel>
          <TabPanel value="TRANSACTIONS">
            {/* <IncomeDetails /> */}
            {/* <ExpenseDetails /> */}
          </TabPanel>
          <TabPanel value="NEW TRANSACTION">
            <NewInputContainer />
          </TabPanel>
        </TabContext>
      </Box>

      {/* <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          aria-label="secondary tabs example"
          centered
        >
          <CustomTab value="OVERVIEW" label="OVERVIEW" />
          <CustomTab value="GOALS" label="GOALS" />
          <CustomTab value="TRANSACTIONS" label="TRANSACTIONS" />
          <CustomTab value="NEW TRANSACTION" label="NEW TRANSACTION" />
        </Tabs>
        <TabPanel value="OVERVIEW">OVERVIEW</TabPanel>
        <TabPanel value="GOALS">GOALS</TabPanel>
        <TabPanel value="TRANSACTIONS">TRANSACTIONS</TabPanel>
        <TabPanel value="NEW TRANSACTION">NEW TRANSACTION</TabPanel> */}
      {/* </Box> */}
    </div>
  );
};

export default MenuBar;
