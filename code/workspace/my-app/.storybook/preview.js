import React from 'react'
import {addDecorator} from '@storybook/react'
import Center from '../src/components/Center/Center'
import {ThemeProvider, theme, CSSReset, Box} from '@chakra-ui/core'
import { withConsole } from '@storybook/addon-console';
import { withKnobs } from '@storybook/addon-knobs';

// addDecorator(story => <Center> {story()} </Center>) // global decorator

/*
// Chakra Version 5
addDecorator(story => 
  <ThemeProvider> 
    <CSSReset/>
    <Box m='4'>
      {story()} 
    </Box>
  </ThemeProvider>
  ) 
*/

// addDecorator((storyFn, context) => withConsole()(storyFn)(context)) // 

// // Chakra Version 6
  export const decorators = [
    (Story) => (
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Box m='4'>
          <Story />
        </Box>
      </ThemeProvider>
    ),
  ];


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}