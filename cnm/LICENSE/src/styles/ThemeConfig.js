import { extendTheme } from "@chakra-ui/react"

//https://github.com/fontsource/fontsource, npm install @fontsource/open-sans 
const styles = {
  global: {
    'html, body': {
      color: '#fafafa',
      background: 'black',
    },
  },

}
export const Theme = extendTheme({styles})