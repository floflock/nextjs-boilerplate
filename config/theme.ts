import { createTheme } from '@mui/material/styles'
import localFont from 'next/font/local'
import { alpha } from '@mui/material'

const museoSansRounded = localFont({
  src: [
    {
      path: '../src/assets/fonts/museo-sans-rounded-100.woff2',
      weight: '100',
      style: 'normal'
    },
    {
      path: '../src/assets/fonts/museo-sans-rounded-300.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../src/assets/fonts/museo-sans-rounded-500.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../src/assets/fonts/museo-sans-rounded-700.woff2',
      weight: '700',
      style: 'normal'
    }
  ]
})

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#B25E46'
    },
    secondary: {
      main: '#19857b'
    },
    background: {
      default: '#F4EBD4',
      paper: '#F4EBD4'
    },
    text: {
      primary: '#4C453C',
      secondary: '#4C453C'
    },
    success: {
      main: '#5cb85c'
    },
    error: {
      main: '#f15a42'
    },
    warning: {
      main: '#b97a00'
    },
    info: {
      main: '#B25E46'
    },
    divider: '#aca296'
  },
  typography: {
    fontFamily: museoSansRounded.style.fontFamily,
    fontWeightLight: 100,
    fontWeightRegular: 300,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontSize: '200%',
      fontWeight: 300
    },
    h2: {
      fontSize: '180%',
      fontWeight: 300
    },
    h3: {
      fontSize: '150%',
      fontWeight: 300
    },
    h4: {
      fontSize: '150%'
    },
    h5: {
      fontSize: '120%'
    },
    h6: {
      fontSize: '110%'
    }
  },
  shape: {
    borderRadius: 28
  },
  components: {
    MuiIconButton: {
      defaultProps: {
        color: 'primary'
      }
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          '&.Mui-disabled': {
            backgroundColor: alpha('#B25E46', 0.3)
          }
        }
      }
    },
    MuiBadge: {
      defaultProps: {
        color: 'primary'
      }
    },
    MuiPaper: {
      defaultProps: {
        elevation: 3
      }
    },
    MuiSkeleton: {
      defaultProps: {
        animation: 'wave'
      }
    },
    MuiAlert: {
      defaultProps: {
        elevation: 3
      }
    }
  }
})

export default theme
