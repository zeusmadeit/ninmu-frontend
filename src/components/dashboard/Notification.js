import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


const Notification = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [notifications] = useState([
    'New comment on your post',
    'New follower',
    'Challenge completed',
    'Goal achieved'
  ]);

  const handleNotificationClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNotificationClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <IconButton
        aria-describedby={id}
        color="inherit"
        onClick={handleNotificationClick}
      >
        <Badge badgeContent={notifications.length} color="success">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleNotificationClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Typography sx={{ p: 2 }}  className="notification-header">Notifications</Typography>
        <List>
          {notifications.map((notification, index) => (
            <ListItem key={index}>
              <ListItemText primary={notification} />
            </ListItem>
          ))}
        </List>
      </Popover>
    </div>
  );
};

export default Notification;
