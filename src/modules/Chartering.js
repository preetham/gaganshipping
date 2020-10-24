import React from 'react';
import { List, ListItemText, ListItem, ListItemIcon } from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

export default function Chartering() {
  return (
    <List>
        <ListItem>
            <ListItemIcon><ArrowRightIcon/></ListItemIcon>
            <ListItemText primary="We trace out the
            cargoes available in Indian Market
            to export out of India and support the Ship
            Owners/Disponent Owners for fixing of
            their vessels to carry out these cargoes.">
            </ListItemText>
        </ListItem>
    </List>
  );
}