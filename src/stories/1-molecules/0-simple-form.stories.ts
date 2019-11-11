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
    formAction: '/register-user',
    title: 'Simple form',
    fields: [
      {
        inputs: [
          {
            label: "name",
            type: "text",
            placeholder: "type your name",
            inputMaxLength: 8,
            inputMinLength: 4,
            name: "name"
          },
          {
            label: "last name",
            type: "text",
            placeholder: "type your lastname",
            name: "lastname",
          }
        ]
      },
      {
        inputs: [
          {
            label: "phone Number",
            type: "number",
            placeholder: "phone number",
            name: "phone",
          }
        ]
      }
    ]
  },
  moduleMetadata: {
    declarations: [ButtonComponent, LabelComponent, InputComponent, FormComponent]
  }
});