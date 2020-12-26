import React from 'react';
import { Switch, Route, Link, useLocation } from "react-router-dom";
import { Box, AppBar, Grid, Tab, Tabs, Typography } from '@material-ui/core';
import { makeStyles, responsiveFontSizes, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Services from './pages/Services';
import logoImg from './static/logo.png';
import qrCodeImg from './static/qrcode.png';

const useStyles = makeStyles(theme => ({
  root: {
    background: '#fff',
    border: 0,
    borderRadius: 3,
    color: '#1f4da1',
    height: 48,
  },
  indicator: {
    backgroundColor: '#fec100'
  },
  tabText: {
    '&:hover': {
      color: '#021e52',
    },
    '&:focus': {
      color: '#fec100',
    },
  },
  topHeading: {
    color: '#fec100',
    fontWeight: 'bold',
    marginTop: '1.4rem',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  logo: {
    height: '5rem',
    [theme.breakpoints.down('sm')]: {
      height: '3rem',
    },
  },
  bottomLogo: {
    height: '5rem',
    [theme.breakpoints.down('sm')]: {
      height: '3rem',
    },
  },
  bottomText: {
    marginTop: '2rem',
  },
  bottomGrid: {
    borderTop: 'solid',
    borderTopColor: '#fec100',
    borderRadius: '3px',
  },
  topBar: {
    backgroundColor: '#fec100',
    borderRadius: '3px',
    padding: '0.2rem',
  },
  topText: {
    display: 'flex',
    alignItems: 'center',
    color: '#021e52',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9rem',
    },
  },
  topLogo: {
    height: '6rem',
  },
}));


function App() {
  const classes = useStyles();
  const location = useLocation();
  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);
  const tabs = [
    {
      route: '/',
      name: 'Home',
      component: Home(),
    },
    {
      route: '/about',
      name: 'Who We Are',
      component: About(),
    },
    {
      route: '/services',
      name: 'Services',
      component: Services(),
    },
    {
      route: '/gallery',
      name: 'Gallery',
      component: Gallery(),
    },
    {
      route: '/contact',
      name: 'Contact Us',
      component: Contact(),
    },
  ];

  return (
    <Box className="App">
      <ThemeProvider theme={theme}>
        <Grid container spacing={2} justify="flex-end" className={classes.topBar}>
          <Grid item>
            <Typography className={classes.topText}>
              Have any enquiry? 24/7
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.topText}><MailOutlineIcon className={classes.topText}/> gagan@gaganship.com </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.topText}><PhoneOutlinedIcon className={classes.topText}/> +91-98661-05677</Typography>
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid>
            <img className={classes.topLogo} alt={classes.topLogo} src={logoImg}/>
          </Grid>
          <Grid item>
            <Typography variant="h4" className={classes.topHeading}>
              GAGAN SHIPPING SERVICES
            </Typography>
          </Grid>
        </Grid>
        <AppBar
          className={classes.root} position="sticky">
          <Tabs value={location.pathname}
            variant="fullWidth"
            scrollButtons='off'
            centered
            classes={{
              indicator: classes.indicator
            }}
          >
            {tabs && tabs.length > 0 &&
              tabs.map((t, index) => 
                <Tab key={index} wrapped
                  className={classes.tabText}
                  label={t.name}
                  value={t.route}
                  component={Link}
                  to={t.route}
                />
              )
            }
          </Tabs>
          </AppBar>
          <Switch>
            {
              tabs && tabs.length > 0 && tabs.map((t, idx) => {
                return (
                  <Route
                    exact={idx === 0}
                    key={idx}
                    path={t.route}
                    render={
                      (props) =>
                      <Grid container justify="center" spacing={3} style={{marginTop: '0.75rem', paddingBottom: '1rem'}}>
                        <Grid item>
                          <Box display="flex" role="tabpanel">
                            {t.component}
                          </Box>
                        </Grid>
                      </Grid>
                    }
                  />
                )
              })
            }
          </Switch>
        
        <Grid container justify="space-around"
            alignItems="center" className={classes.bottomGrid}>
            <Grid item>
              <img className={classes.bottomLogo} alt="bottomLogo" src={logoImg}/>
            </Grid>
            <Grid item>
              <Box>
                <Typography style={{paddingRight: "1rem"}}>
                  © 2020 Gagan Shipping Services
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <img className={classes.logo} alt={classes.logo} src={qrCodeImg}/>
            </Grid>
          </Grid>
        </ThemeProvider>
      </Box>
  );
}

export default App;
