import BrkCardNavStories from '../BrkCardNav/BrkCardNav.stories'
import BrkCardHero from './BrkCardHero.vue'

export default {
  title: 'Composants/Cartes/Carte « Héro »',
  component: BrkCardHero,
  argTypes: {
    title: {
      description: 'Titre de la carte.',
    },
    preTitle: {
      description: 'Pré-titre de la carte.',
    },
    postTitle: {
      description: 'Post-titre de la carte.',
    },
    link: {
      description: `Lien de la carte.<br />
      Ce lien est actif sur toute la carte à l'exception du bouton.<br />
      Pour le lien du bouton, il faut passer l'information dans \`brkButtonArgs\`.`,
    },
    secondaryInfo: {
      control: 'select',
      description: 'Indique le type de contenu secondaire.',
      options: ['', 'BrkCardJackpot'],
      name: 'secondaryInfo',
    },
    showNav: {
      description: 'Afficher ou pas la navigation',
    },
    brkButtonArgs: {
      description: 'Propriétés passées à BrkButton.',
    },
    brkTripleImagesArgs: {
      description: 'Propriétés passées à BrkTripleImages.',
    },
    brkSecondaryInfoArgs: {
      description: 'Propriétés passées à secondaryInfo.',
    },
    brkCardNavArgs: {
      description: 'Propriétés passées à BrkCardNav.',
    },
  },
}

const Template = (args) => ({
  components: { BrkCardHero },
  setup() {
    return { args }
  },
  template: '<brk-card-hero v-bind="args" />',
})

export const Primary = Template.bind({})
Primary.args = {
  title: 'Titre du jeu',
  preTitle: 'Pré titre',
  postTitle: 'Post titre',
  link: 'https://google.ca',
  secondaryInfo: 'BrkCardJackpot',
  showNav: false,
  brkButtonArgs: {
    label: 'Jouer!',
    link: 'https://google.com',
  },
  brkTripleImagesArgs: {
    bg: [
      {
        path: '/assets/background_macedonia.png',
        width: '300w',
      },
    ],
    character: [
      {
        path: '/assets/KingOfMacedonia.png',
        width: '300w',
      },
    ],
    logo: [
      {
        path: '/assets/logo_macedonia.png',
        width: '300w',
      },
    ],
    alt: 'King of Macédonia',
  },
  brkSecondaryInfoArgs: {
    /* Il faudra ajouter la possibilité de changer les options par défaut selon le composant. Pour l'instant, seuls les composants pour Jackpot sont ici. */
    brkImageArgs: {
      src: [
        {
          path: '/assets/logo_MegaJackpotsCleopatra.png',
          width: '300w',
        },
      ],
      alt: 'Logo mega jackpot'
    },
    backgroundColor: '#2d2feb',
    text: 'Logo mega jackpot',
    totalAmount: '1000000',
    format: 'fr',
  },
  brkCardNavArgs: {
    btnOpenLabel: 'Ouvrir le menu du jeu',
    btnCloseLabel: 'Fermer le menu du jeu',
    links: [
      { url: 'http://www.perdu.com', label: 'Perdu', newWindow: true },
      { url: 'http://www.google.com', label: 'Google', newWindow: false },
      { url: 'https://www.nyan.cat/', label: 'Nyan Cat', newWindow: true },
    ],
  },
}
Primary.storyName = 'Carte complète'

const GridTemplate = (args) => ({
  components: { BrkCardHero },
  setup() {
    return { args }
  },

  template: `
  <div style="display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: 1fr; grid-column-gap: 20px;">
    <brk-card-hero
      v-bind="args"
      title="Titre overridé avec quelque chose de vraiment très beaucoup plus long genre abusif qui va dépasser les deux lignes permises"
      preTitle="Nouveauté nouvelle fraîche du jour avec beaucoup de bla bla pour valider la longueur de la chaine"
      postTitle="Avec des mises allant de 1$ à 100 000 000$ il y en a pour tout le monde"
    />
    <brk-card-hero v-bind="args" secondaryInfo="" />
    <brk-card-hero v-bind="args" preTitle="" />
  </div>`,
})

export const Grid = GridTemplate.bind({})
Grid.args = {
  title: 'Titre du jeu',
  preTitle: 'Pré titre',
  postTitle: 'Post titre',
  link: 'https://google.ca',
  secondaryInfo: 'BrkCardJackpot',
  brkButtonArgs: {
    label: 'Jouer!',
    link: 'https://google.com',
  },
  brkTripleImagesArgs: {
    bg: [
      {
        path: '/assets/background_macedonia.png',
        width: '300w',
      },
    ],
    character: [
      {
        path: '/assets/KingOfMacedonia.png',
        width: '300w',
      },
    ],
    logo: [
      {
        path: '/assets/logo_macedonia.png',
        width: '300w',
      },
    ],
    alt: 'King of Macédonia',
  },
  brkSecondaryInfoArgs: {
    /* Il faudra ajouter la possibilité de changer les options par défaut selon le composant. Pour l'instant, seuls les composants pour Jackpot sont ici. */
    src: [
      {
        path: '/assets/logo_MegaJackpotsCleopatra.png',
        width: '300w',
      },
    ],
    alt: 'Logo mega jackpot',
    backgroundColor: '#2d2feb',
    text: 'Ceci est un test',
    totalAmount: '1000000',
    format: 'fr',
  },
  brkCardNavArgs: {
    btnOpenLabel: 'Ouvrir le menu du jeu',
    btnCloseLabel: 'Fermer le menu du jeu',
    links: [
      { url: 'http://www.perdu.com', label: 'Perdu', newWindow: true },
      { url: 'http://www.google.com', label: 'Google', newWindow: false },
      { url: 'https://www.nyan.cat/', label: 'Nyan Cat', newWindow: true },
    ],
  },
}
Grid.storyName = 'Exemple en grille'

export const __namedExportsOrder = ['Primary', 'Grid']
