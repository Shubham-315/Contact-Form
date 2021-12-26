import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { experimentalStyled as styled } from '@mui/material/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  var userDetail = localStorage.getItem("userDetail") || JSON.stringify([]);
  userDetail = JSON.parse(userDetail);
 
    // console.log(getdata);
    return (
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {userDetail.map((user, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Name: {user.name}
                  </Typography>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Email: {user.email}
                  </Typography>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Phone: {user.phone}
                  </Typography>
                </CardContent>
                <CardActions>
                  
                  <Button size="small">Edit</Button>
                  <Button size="small">Delete</Button>
                  <Button size="small">favourite</Button>
                </CardActions>
              </Card>
            </Item>
          </Grid>
        ))}
      </Grid>
    );  
}

export default App;
