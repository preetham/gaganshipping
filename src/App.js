import React from 'react';
import { AppBar, Container, Grid, Tab, Tabs } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Services from './pages/Services';

const useStyles = makeStyles({
  root: {
    background: '#fff',
    border: 0,
    borderRadius: 3,
    color: 'black',
    height: 48,
    padding: '0 30px',
  },
  indicator: {
    backgroundColor: '#fec100',
  },
  tabText: {
    '&:hover': {
      color: '#fec100',
    },
    '&$selected': {
      color: '#fec100'
    },
  },
});

const pages = {
  1: About,
  2: Services,
  3: Gallery,
  4: Contact,
};

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

function TabPanel(props) {
  const { index } = props;
  return (
  <div>
    {pages[index]()}
  </div>
  );
}


function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container className="App">
      <AppBar className={classes.root} position="sticky">
        <Tabs value={value}
          classes={{
            indicator: classes.indicator
          }}
          className={classes.tabText}
          onChange={handleChange} variant="fullWidth"
          scrollButtons="auto">
          <LinkTab label="Home" href="/" />
          <LinkTab label="Who We Are" href="/about" />
          <LinkTab label="Services" href="/services" />
          <LinkTab label="Gallery" href="/gallery" />
          <LinkTab label="Contact Us" href="/contact" />
        </Tabs>
      </AppBar>
      <Grid container direction="column" spacing={4}>
      <Grid item>
        <TabPanel value={value} index={1}></TabPanel>
      </Grid>
      <Grid item>
        <TabPanel value={value} index={2}></TabPanel>
      </Grid>
      <Grid item>
        <TabPanel value={value} index={3}></TabPanel>
      </Grid>
      <Grid item>
        <TabPanel value={value} index={4}></TabPanel>
      </Grid>
      </Grid>
    </Container>
  );
}

export default App;
