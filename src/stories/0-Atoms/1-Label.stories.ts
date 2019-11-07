import { LabelComponent } from '../../app/components/Atoms/label/label.component';

export default {
    title: 'Atoms/Label',
};
  
export const defaultLabel = () => ({
    component: LabelComponent,
    props: {
        title: 'Label',
    },
});