import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {},
  },
  colors: {
    background: {
      // blanched almond color
      100: '#fee9cc',
      // Dim Gray
      200: '#6e6d6d',
    },
  },
});

export default theme;
