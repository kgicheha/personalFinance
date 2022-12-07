import React, { useState } from "react";
import {Tab, Tabs, Box, Button} from '@mui/material';


const MenuBar = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue ) => {
    console.log(newValue)
    setValue(newValue);
  };

  // CUSTOM CSS
  // const CustomButton = styled(Button)({
  //   "&:hover": {
  //     textDecoration: "underline",
  //     color: "#178fff",
  //     backgroundColor: "#f6f6f6",
  //     fontWeight: "bold",
  //   },
  // });
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
      <Tab value="OVERVIEW" label="OVERVIEW" />
      <Tab value="TRANSACTIONS" label="TRANSACTIONS" />
      <Tab value="GOALS" label="GOALS" />
    </Tabs>
  </Box>
    </div>
  );
};

export default MenuBar;
