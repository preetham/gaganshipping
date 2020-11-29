import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItemText, ListItemIcon, ListItem } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles((theme) => ({
  bulletIcon: {
    fontSize: 'small',
    color: 'black',
  },
}));

export default function Bunkering() {
  const classes = useStyles();
  return (
    <List>
        <ListItem>
          <ListItemIcon><FiberManualRecordIcon className={classes.bulletIcon}/></ListItemIcon>
            <ListItemText primary="We are providing Bunkering services at port
            of Visakhapatnam & Gangavaram in East Coast Ports of India.
            We make sure to replenish our customers with world class companies
            to supply required fuels, lubricants with an internationally approved standard norm.">
            </ListItemText>
        </ListItem>
    </List>
  );
}