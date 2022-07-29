import BrkButton from './BrkButton.vue';

export default {
  title: 'Atomes/Bouton',
  component: BrkButton,
  argTypes: {
    label: {
      control: { type: 'text' },
      description: "Texte qui sera ajouté dans le bouton",
      name: "Libellé du bouton",
    },
    accessibilityText : {
      control: { type: 'text' },
      description : 'Texte pour les lecteurs d\'ecrans',
      name: "Texte d'accessibilité",
    },
    link: {
      control: { type: 'text' },
      description:
        "Lien qui sera ajouté sur le bouton. Ceci transforme le bouton en lien avec la balise de lien html",
      name: "Lien URL",
    },
    variant: {
      control: "select",
      description: "Indique si le bouton est primaire, secondaire et tertiaire",
      options: ["primary", "secondary", "tertiary"],
      name: "Variant",
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
    },
    inverted: {
      control: { type: "boolean" },
      description: "Visuel inversé",
      name: "Visuel inversé",
    }
  },
};

const Template = (args) => ({
  components: { BrkButton },
  setup() {
    return { args };
  },
  template: '<brk-button v-bind="args" />',
});

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: 'Bouton',
  accessibilityText: 'Bouton tertiaire',
  variant: 'tertiary',
  size: 'md',
  link: 'http://loto-quebec.com',
  inverted: false,
  callback: () => { console.log('click'); }
};
