import './Test.css'
import Stack from '@mui/material/Stack'
import LeftContent from './components/LeftContent'
import MainContent from './components/MainContent'
import RightContent from './components/RightContent'

function Test() {
  return (
    <div className='Test'>
      <Stack direction='row' justifyContent='space-between'>
        <LeftContent />
        <MainContent />
        <RightContent />
      </Stack>
    </div>
  )
}

export default Test
