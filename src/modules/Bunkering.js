import React from 'react';
import { List, ListItemText, ListItem, ListItemIcon } from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

export default function Bunkering() {
  return (
    <List>
        <ListItem>
            <ListItemIcon><ArrowRightIcon/></ListItemIcon>
            <ListItemText primary="We are providing Bunkering services at port
            of Visakhapatnam & Gangavaram in East Coast Ports of India.
            We make sure to replenish our customers with world class companies
            to supply required fuels, lubricants with an internationally approved standard norm.">
            </ListItemText>
        </ListItem>
    </List>
  );
}