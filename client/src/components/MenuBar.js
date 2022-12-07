import React, { useState } from "react";
import {Tab, Tabs, Box, Button} from '@mui/material';
import { styled } from "@mui/material";


const MenuBar = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue ) => {
    setValue(newValue);
  };

  // CUSTOM CSS
  const CustomTab = styled(Tab)({
    "&:hover": {
      color: "#178fff",
      fontWeight: "bold",
    },
  });
  //CUSTOM CSS
  return (
    <div>
    <Box sx={{ width: '100%' }}>
    <Tabs
      value={value}
      onChange={handleChange}
      textColor="secondary"
      indicatorColor="secondary"
      aria-label="secondary tabs example"
      centered
    >
      <CustomTab value="OVERVIEW" label="OVERVIEW" />
      <CustomTab value="TRANSACTIONS" label="TRANSACTIONS" />
      <CustomTab value="GOALS" label="GOALS" />
    </Tabs>
  </Box>
    </div>
  );
};

export default MenuBar;
