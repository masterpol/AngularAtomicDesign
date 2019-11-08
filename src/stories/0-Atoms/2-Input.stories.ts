import { InputComponent } from '../../app/components/Atoms/input/input.component';

export default {
    title: 'Atoms/input',
};
  
export const defaultInput = () => ({
    component: InputComponent,
    props: {
        placeholder: 'click me',
        type: 'text',
        maxLength: 15,
    },
});