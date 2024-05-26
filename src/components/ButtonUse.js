import * as React from 'react';
import Button from '@mui/material/Button';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import { AppBar, Tab, Tabs } from '@mui/material';

export default function ButtonUse() {
  const [value, setValue] = React.useState(0);
  const handleTabs = (e, val) =>{
setValue(val)
  }
  return (
  <div>
    <Button variant="contained" startIcon={<AccessAlarm/>} endIcon={<ThreeDRotation/>}>Hello world</Button>
    <AppBar position='static' sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleTabs}>
        <Tab label="Item 1"></Tab>
        <Tab label="Item 2"></Tab>
        <Tab label="Item 3"></Tab>
      </Tabs>
    </AppBar>
    <TabPanel value={value} index={0}>
      Item one
    </TabPanel>
    <TabPanel value={value} index={1}>
      Item two
    </TabPanel>
    <TabPanel value={value} index={2}>
      Item three
    </TabPanel>
    </div>
  );
}

function TabPanel(props) {
  const {children, value, index} = props
  return (
    <div>
      {
        value==index && (
          <h1>{children}</h1>
        )
      }
    </div>
  )
}