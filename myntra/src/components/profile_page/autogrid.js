import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: theme.palette.text.primary,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

export default function AutoGridNoWrap({ data }) {
  return (
    <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
      {data.map((item) => (
        <StyledPaper
          key={item.id}
          sx={{
            my: 1,
            mx: 'auto',
            p: 2,
            maxWidth: '100%',
          }}
        >
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar src={item.profileImage}>{item.name[0]}</Avatar>
            </Grid>
            <Grid item xs zeroMinWidth>
              <Typography noWrap>{item.name}</Typography>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary">Follow</Button>
            </Grid>
          </Grid>
        </StyledPaper>
      ))}
    </Box>
  );
}
