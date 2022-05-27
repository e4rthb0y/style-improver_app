import axios from 'axios';

export const moods = [
  {
    key: 'casual',
    name: 'Casual',
    colors: [
      [28, 58, 215],
      [84, 173, 144],
    ],
    lottie: require('./lotties/moods/casual.json'),
    query: {
      men: 'shirt hanging men',
      women: 'blouse hanging women',
      unisex: 'trend fashion man woman',
    },
  },
  {
    key: 'fiesta',
    name: 'Fiesta',
    colors: [
      [249, 215, 104],
      [69, 199, 118],
    ],
    lottie: require('./lotties/moods/fiesta.json'),
    query: {
      men: 'fashionable boy',
      women: 'fashionable girl',
      unisex: 'fashionable',
    },
  },
  {
    key: 'godin',
    name: 'Godín',
    colors: [
      [101, 137, 160],
      [165, 190, 211],
    ],
    lottie: require('./lotties/moods/godin.json'),
    query: {
      men: 'elegant fashion men',
      women: 'formal fashion women',
      unisex: 'queer fashion elegant',
    },
  },
  {
    key: 'fit',
    name: 'Fit',
    colors: [
      [209, 249, 202],
      [28, 1165, 172],
    ],
    lottie: require('./lotties/moods/fit.json'),
    query: {
      men: 'sportswear men',
      women: 'sportswear women',
      unisex: 'sportswear',
    }
  },
];

export const genders = [
  {
    key: 'hombre',
    name: 'Hombre',
    emoji: '🕺',
    query: 'men'
  },
  {
    key: 'unicornio',
    name: 'Unicornio',
    emoji: '🦄',
    query: 'unisex',
  },
  {
    key: 'mujer',
    name: 'Mujer',
    emoji: '🤸‍♀️',
    query: 'women',
  },
];

export default class PaletteModel {
  async getModels() {
    const res = await axios.get('http://colormind.io/list');

    this.models = res.data.result;

    return this.models;
  }

  async getPalette(model, input) {
    const res = await axios.post('http://colormind.io/api/', { model, input });

    this.models[model] = res.data.result;

    return this.models[model];
  }
}
