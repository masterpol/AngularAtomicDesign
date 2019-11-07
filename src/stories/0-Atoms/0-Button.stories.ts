import { ButtonComponent } from '../../app/components/Atoms/button/button.component';

export default {
  title: 'Atoms/Button',
};

export const defaultButton = () => ({
  component: ButtonComponent,
  props: {
    title: 'click me',
    type: 'submit'
  },
});

defaultButton.story = {
  name: 'Default'
}

export const success = () => ({
  component: ButtonComponent,
  props: {
    title: 'click me',
    type: 'submit',
    className: 'success'
  },
});

success.story = {
  parameters: { notes: 'My notes on a button with emojis' },
};

export const danger = () => ({
  component: ButtonComponent,
  props: {
    title: 'click me',
    type: 'submit',
    className: 'danger'
  },
});

danger.story = {
  parameters: { notes: 'My notes on a button with emojis' },
};

export const main = () => ({
  component: ButtonComponent,
  props: {
    title: 'click me',
    type: 'submit',
    className: 'main'
  },
});
