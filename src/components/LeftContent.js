import { Box } from '@mui/material'

function LeftContent() {
  return (
    <Box
      bgcolor='red'
      flex={1}
      sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}
    >
      Left Content
    </Box>
  )
}

export default LeftContent
