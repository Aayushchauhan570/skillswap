import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

export default function ProfileList({profile})  {

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
      <ListItem>
        <ListItemAvatar>
          <Avatar
            src={profile.avatarUrl || undefined}
          >
            {!profile.avatarUrl && profile.name.charAt(0).toUpperCase()}
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={profile.name} secondary={profile.skillsToLearn} />
      </ListItem>
    </List>
  );
}
