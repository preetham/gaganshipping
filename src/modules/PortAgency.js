import React from 'react';
import { List,
  ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const services = [
  "We provide agency services and shipping expertise to local and foreign ship owning, trading, and industry interests. We ensure vessels a fast turnaround, covering bunkering, stores, spares and repairs, cash advances, attending to crew change and timely support of all other required activities with maximum efficiency at appropriate cost.",
  "We offers full range of agency services to ship and cargo owners. Our company acts on behalf of ship operators, charterers and represents them during berthing arrangements and prior reservation, inward and outward custom clearances, coordination of cargo operations in port, warehouses, payment of port dues and handling of requests of ship, crew etc.",
  "Providing all port related information to the Owner’s to fix their vessels for discharging/loading of cargoes and for smooth turn round of the vessel.",
  "Provide advisory on port rules and restrictions.",
  "Providing Estimated Port Disbursement Account (EPDA)",
  "Providing all Pre-arrival port information / instructions/Documents needed for berthing of the vessel to the Master.",
  "Ensuring timely berthing of the vessels upon arrival and timely departure upon completion of discharging/loading.",
  "Drawing up the documents for submitting to the Port, Customs, Quarantine, Immigration etcetera all statutory authorities.",
  "Liaise with Shippers/ Receivers/ Terminal Operators Pre-Berthing Questionnaires prior arrival of vessels and during cargo operations and complete the vessels smoothly in time.",
  "Submit Notice of Readiness (NOR), Statement of Fact (SOF) and Mandatory Ship Report (MSR) documents, and obtain cargo permits, not excluding daily reports to ship owners.",
  "Also as protecting agents we take care of your assets from the ground. We work closely with your appointed agents to ensure cost effectiveness.",
  "We vet Documents against Acceptance (DA) and prevent overcharges.",
  "Validate SOF",
  "We act as proxy in dispute and incident management.",
  "Disburse funds within statutory requirements.",
  "Collecting freight on cargoes where ever applicable.",
  "Contacting shippers and the receivers of the goods.",
]

export default function PortAgency() {
  return (
    <List component="nav">
      {services && services.length > 0 && 
        services.map((text, index) => {
          return (
            <ListItem key={index}>
              <ListItemIcon><ArrowRightIcon/></ListItemIcon>
              <ListItemText primary={text}></ListItemText>
            </ListItem>
          );
      })}
    </List>
  );
}