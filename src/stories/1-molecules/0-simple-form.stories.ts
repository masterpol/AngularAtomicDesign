import { ButtonComponent } from '../../app/components/Atoms/button/button.component';
import { LabelComponent } from '../../app/components/Atoms/label/label.component';
import { InputComponent } from '../../app/components/Atoms/input/input.component';
import { FormComponent } from '../../app/components/Atoms/form/form.component';
import { SimpleFormComponent } from '../../app/components/molecules/simple-form/simple-form.component';

export default {
  title: 'Molecules/Simple form',
};

export const simpleForm = () => ({
  component: SimpleFormComponent,
  props: {
    label: 'Enter your name',
    inputPlaceHolder: 'min length 4, max length 8',
    inputMaxLength: 8,
    inputMinLength: 4,
    inputType: 'text',
    formAction: '/register-user',
  },
  moduleMetadata: {
    declarations: [ButtonComponent, LabelComponent, InputComponent, FormComponent]
  }
});