import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Title default to all components',
    description: 'description default to all components'
  }
} as Meta

export const Primary: Story = (args) => <Main {...args} />
// Posso passar os argumentos somente para esse componente
Primary.args = {
  title: 'title Only this component',
  description: 'Description only this component'
}

export const Secundary: Story = (args) => <Main {...args} />
