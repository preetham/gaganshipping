import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List,
  ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const services = [
  "Issue of Letter of Invitations (LOI) to Owners/Crew Manning Agents to apply for TRANSIT VISA with Indian Embassies for incoming crew to arrive in India for joining vessels.",
  "The personalised attention from the moment of arrival of the crew members at our airports until their effective boarding, passing through the transportation to the port to safely board the vessel for incoming crew.",
  "Similarly, we ensure safe landing of the dis-embarking crew from the vessel, clearance through Customs, Port, Immigration Authorities and obtain Travel Permits and dropping at airport smoothly for departing to their home towns.",
  "Arranging doctor for the crew for any medical assistance.",
  "Accommodation in hotels as and when required with economical costs.",
  "Arrangement of Air Tickets as and when required with low fares.",
]

const useStyles = makeStyles((theme) => ({
  bulletIcon: {
    fontSize: 'small',
  },
}));

export default function CrewHandling() {
  const classes = useStyles();
  return (
    <List>
      {services && services.length > 0 && 
        services.map((text, index) => {
          return (
            <ListItem key={index}>
              <ListItemIcon><ArrowForwardIosIcon className={classes.bulletIcon}/></ListItemIcon>
              <ListItemText primary={text}>
              </ListItemText>
            </ListItem>
          );
      })}
    </List>
  );
}