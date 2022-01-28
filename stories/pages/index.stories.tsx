import { Meta, Story } from '@storybook/react'
import Index from '../../src/pages/index'

export default {
  title: 'pages/index',
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

export const Primary: Story = () => <Index />
