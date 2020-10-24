import React from 'react';
import { Grid, Tabs, Tab, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Bunkering from '../modules/Bunkering';
import Husbandry from '../modules/Husbandry';
import CrewHandling from '../modules/CrewHandling';
import Chartering from '../modules/Chartering';
import PortAgency from '../modules/PortAgency';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    // height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  );
}

function Services() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return (
        <Grid container justify="center">
            <Grid item className={classes.root}>
              <Tabs orientation="vertical"
                variant="fullWidth"
                value={value}
                onChange={handleChange}
                className={classes.tabs}
              >
                <Tab label="Port Agency" />
                <Tab label="Chartering" />
                <Tab label="Crew Handling"/>
                <Tab label="Husbandry"/>
                <Tab label="Bunkering"/>
              </Tabs>
              <TabPanel value={value} index={0}>
                <PortAgency />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Chartering />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <CrewHandling />
              </TabPanel>
              <TabPanel value={value} index={3}>
                <Husbandry/>
              </TabPanel>
              <TabPanel value={value} index={4}>
                <Bunkering/>
              </TabPanel>
            </Grid>
        </Grid>
    );
}

export default Services;