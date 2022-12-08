import React, { useState } from "react";
import { Tab, Tabs, Box, Button } from "@mui/material";
import { styled } from "@mui/material";

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
        <Tabs
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
      </Box>
    </div>
  );
};

export default MenuBar;
