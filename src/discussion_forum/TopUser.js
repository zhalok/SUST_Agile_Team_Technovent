import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import Avatar from '@mui/material/Avatar';

export default function TagUsers() {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',padding:'50px 10px 0px 0px' }}>
      <nav aria-label="main mailbox folders">
        <List subheader={<h5>Top Users</h5>}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                        R
                    </Avatar>
              </ListItemIcon>
              <ListItemText primary="Rabi Islam" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                        Z
                    </Avatar>
              </ListItemIcon>
              <ListItemText primary="Zhalok Rahman" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                        A
                    </Avatar>
              </ListItemIcon>
              <ListItemText primary="Abdul Kader Akash" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                        R
                    </Avatar>
              </ListItemIcon>
              <ListItemText primary="Tithi Saha" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                        M
                    </Avatar>
              </ListItemIcon>
              <ListItemText primary="Mahinur Rahman" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                        S
                    </Avatar>
              </ListItemIcon>
              <ListItemText primary="Sohan Rahman" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      
    </Box>
  );
}