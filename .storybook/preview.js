import { NextUIProvider } from "@nextui-org/react";
import { RouterContext } from "next/dist/shared/lib/router-context"; // next 12

import {lightTheme, darkTheme} from '../src/utils/uiTheme';

export const globalTypes = {
  theme: {
    name: 'theme',
    description: 'global theme',
    defaultValue: 'light',
    toolbar: {
      icon: 'lightning',
      items: ['light', 'dark'],
      showName: true
    }
  }
}

export const decorators = [
  (Story, context) => {
    return (
      <NextUIProvider theme={context.globals.theme === 'light' ? lightTheme : darkTheme}>
        <Story />
      </NextUIProvider>
    )
  }
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  }
}