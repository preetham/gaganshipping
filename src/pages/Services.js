import React from 'react';
import { Grid, Tabs, Tab, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Bunkering from '../modules/Bunkering';
import Husbandry from '../modules/Husbandry';
import CrewHandling from '../modules/CrewHandling';
import Chartering from '../modules/Chartering';
import PortAgency from '../modules/PortAgency';
import servicesImg from '../static/services.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
  },
  indicator: {
    backgroundColor: '#fec100'
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    display: 'inline-table',
  },
  outerDiv: {
    width: '100%',
    display: 'grid',
    height: '40%',
    [theme.breakpoints.down('md')]: {
      height: '20%',
    },
  },
  imageText: {
    position: 'absolute',
    top: '20rem',
    [theme.breakpoints.down('md')]: {
      top: '16rem',
      fontSize: 'x-large',
    },
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  image: {
    borderRadius: '3px',
    maxWidth: '100%',
    height: 'auto',
    objectFit: 'cover',
  },
}));

const tabs = {
  0: PortAgency,
  1: Chartering,
  2: CrewHandling,
  3: Husbandry,
  4: Bunkering,
}

function TabPanel(props) {
  const { value, index, ...other } = props;
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        tabs[index]()
      )}
    </Box>
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
          <Grid item>
            <Box paddingBottom={3} className={classes.outerDiv}>
            <img className={classes.image} alt="services" src={servicesImg}/>
            <Typography className={classes.imageText} variant="h2">Services</Typography>
          </Box>
          </Grid>
          <Grid item className={classes.root}>
            <Tabs orientation="vertical"
              variant="fullWidth"
              value={value}
              onChange={handleChange}
              className={classes.tabs}
              classes={{indicator: classes.indicator}}
            >
              <Tab label="Port Agency"/>
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