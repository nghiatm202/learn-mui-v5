import './Custom.css'
import { Button, styled } from '@mui/material'

function Custom() {
  const MyButton = styled(Button)({
    backgroundColor: '#009900',
    margin: 5,
    color: '#fff',
    '&:hover': {
      backgroundColor: '#339966',
    },
  })

  return (
    <div>
      <MyButton>Click me</MyButton>
      <MyButton>Click me</MyButton>
      <MyButton>Click me</MyButton>
    </div>
  )
}

export default Custom
