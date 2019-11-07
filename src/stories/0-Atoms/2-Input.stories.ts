import { InputComponent } from '../../app/components/Atoms/input/input.component';

export default {
    title: 'Atoms/input',
};
  
export const defaultInput = () => ({
    component: InputComponent,
    props: {
        title: 'esto',
        placeholder: 'click me',
        type: 'number',
        maxLength: 15,
    },
});