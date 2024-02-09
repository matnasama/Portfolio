import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';
import { sitios } from '../../data/data.json'

export default function AlignItemsList() {
  return (
    <List sx={{ width: 360, bgcolor: '#222c35' }}>
      <Typography variant="h6" component="h6" sx={{ color: '#fff', fontFamily:'Roboto Condensed', margin: '0 1rem'}}>
         CONTACT
      </Typography>
      {sitios.map((sitio) => (

      <ListItem key={sitio.id}>
        <ListItemAvatar>
          <Avatar src={sitio.imagen} href={sitio.url} variant='square'/>
        </ListItemAvatar>
        <ListItemText
          primary={sitio.nombre}
          sx={{ color: '#fff', fontFamily:'Roboto Condensed', margin: '0 1rem'}}
        />
        <Link href={sitio.url} underline="none">
          {'VISITAR'}
        </Link>
      </ListItem>
      ))}
      <Divider variant="inset" component="li" />
    </List>

  );
}
