import './App.css'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Grid from '@mui/material/Grid'

function App() {
  return (
    <div className='App'>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h5' align='left' sx={{ flexGrow: 1 }}>
            Hello MUI v5
          </Typography>
          <Button color='inherit'>Login</Button>
          <Button color='inherit'>Sign Up</Button>
        </Toolbar>
      </AppBar>

      <Box mt='20px'>
        <Typography variant='h1' gutterBottom>
          MUI v5
        </Typography>
        <Typography variant='subtitle' align='left' gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
          eius sint dolorum aspernatur obcaecati consectetur impedit mollitia,
          hic, assumenda esse, ex dolorem provident quibusdam praesentium et
          sapiente reprehenderit nulla explicabo. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Nam accusantium, quis maxime, dolorem
          velit beatae consequatur cumque adipisci, eum eos voluptatum
          voluptatem nemo modi repellendus doloribus facilis sint officia
          deleniti!
        </Typography>
      </Box>

      <Grid container p={5} spacing={5}>
        <Grid item xs={4}>
          <Typography paragraph={true} align='justify'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
            nobis quis distinctio adipisci veritatis dolore doloremque nemo
            tenetur reiciendis neque voluptate tempore delectus in ipsam
            nesciunt, facere voluptatibus illum impedit.
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography paragraph={true} align='justify'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
            nobis quis distinctio adipisci veritatis dolore doloremque nemo
            tenetur reiciendis neque voluptate tempore delectus in ipsam
            nesciunt, facere voluptatibus illum impedit. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Dolorum nobis quis distinctio
            adipisci veritatis dolore doloremque nemo tenetur reiciendis neque
            voluptate tempore delectus in ipsam nesciunt, facere voluptatibus
            illum impedit.
          </Typography>
        </Grid>
      </Grid>

      <Stack direction='row' spacing={5} paddingTop='15px' paddingLeft={15}>
        <Button variant='text'>Click me</Button>
        <Button variant='contained'>Submit</Button>
        <Button variant='outlined'>Haha</Button>
        <Button disabled>Disabled</Button>
        <Button variant='outlined' startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button variant='outlined' startIcon={<SendIcon />}>
          Send
        </Button>
      </Stack>
    </div>
  )
}

export default App
