import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MyLabel } from "../../components/MyLabel";




export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        size: {
            control: {
                type: 'select',
            }
        },
        color: {
            control: {
                type: 'select',
            }
        },
        fontColor: {
            control: {
                type: 'color',
            }
        }
    }

} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />




// las paginas
// creamos una copia del template
export const Basic = Template.bind({})

Basic.args = {
    size: 'normal',
    allCaps: false // capitalizar todas las letras
}


export const AllCaps = Template.bind({});

AllCaps.args = {
    size: 'normal',
    allCaps: true
}

export const Secondary = Template.bind({});

Secondary.args = {
    size: 'normal',
    allCaps: false,
    color: 'secondary'  // primary | secondary | tertiary
}

export const Tertiary = Template.bind({});
Tertiary.args = {
    size: 'normal',
    color: 'tertiary'
}

// Custom fontColor
// fontcolor: #5517ac

export const CustomColor = Template.bind({});

CustomColor.args = {
    size: 'h1',
    fontColor: '#5517ac'
}