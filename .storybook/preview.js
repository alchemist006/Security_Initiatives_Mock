import  {ThemeProvider}  from "@mui/material";
import theme from "../src/core-utils/theme"
import "./storybook.css";


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  
}



export const decorators = [(Story) => (
<ThemeProvider  theme={theme}>
  <Story />
</ThemeProvider>
)]