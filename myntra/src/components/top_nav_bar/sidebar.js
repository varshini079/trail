// Sidebar.js
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const sidebarItems = [
  { category: 'Overview', items: [] },
  { category: 'Orders', items: ['Orders & Returns'] },
  { category: 'Credits', items: ['Coupons', 'Myntra Credit', 'MynCash'] },
  { category: 'Account', items: ['Profile', 'Saved Cards', 'Saved UPI', 'Saved Wallets/BNPL', 'Addresses', 'Myntra Insider', 'Delete Account'] },
  { category: 'Legal', items: ['Terms of Use', 'Privacy Policy'] },
];

const Sidebar = () => {
  return (
    <List component="nav" aria-label="main mailbox folders">
      {sidebarItems.map((section, index) => (
        <React.Fragment key={index}>
          <ListItem>
            <ListItemText primary={section.category} />
          </ListItem>
          <Divider />
          {section.items.map((item, idx) => (
            <React.Fragment key={idx}>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary={item} />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </React.Fragment>
      ))}
    </List>
  );
};

export default Sidebar;
