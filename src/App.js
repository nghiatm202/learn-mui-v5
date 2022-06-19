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
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

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
        <Typography variant='subtitle1' p={5} align='justify' gutterBottom>
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

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Learn MUI v5</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
                ex ducimus aspernatur neque ab numquam maiores facilis. Maiores,
                accusantium! Excepturi perspiciatis sunt quam officiis quia, ab
                veniam a illo nam?
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Learn MUI v3</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
                ex ducimus aspernatur neque ab numquam maiores facilis. Maiores,
                accusantium! Excepturi perspiciatis sunt quam officiis quia, ab
                veniam a illo nam?
              </Typography>
            </AccordionDetails>
          </Accordion>
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
          <FormControl>
            <FormLabel color='success'>
              Which framework would you like to use?
            </FormLabel>
            <RadioGroup row>
              <FormControlLabel
                value='nextjs'
                control={<Radio color='success' />}
                label='Nextjs'
              />
              <FormControlLabel
                value='nextjs1'
                control={<Radio color='success' />}
                label='Nextjs1'
              />
              <FormControlLabel
                value='nextjs2'
                control={<Radio color='success' />}
                label='Nextjs2'
              />
            </RadioGroup>
          </FormControl>
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
