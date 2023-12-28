import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar  variant="square" alt="Remy Sharp" src="https://www.tonica.la/__export/1655760341555/sites/debate/img/2022/06/20/avatar-la-leyende-aang-netflix.jpg_423682103.jpg" sx={{ width: 56, height: 56, border: "2px solid #888"}}/>
    </Stack>
  );
}