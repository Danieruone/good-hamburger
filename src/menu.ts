import xBurger from './assets/photos/x-burger.jpg';
import xBacon from './assets/photos/x-bacon.jpg';
import xEgg from './assets/photos/x-egg.jpg';
import fries from './assets/photos/fries.jpg';
import drink from './assets/photos/drink.jpg';

export const menuArray = [
  {
    name: 'X Burger',
    price: '5,00',
    type: 'sandwich',
    image: xBurger,
    uuid: '85a3ca99-f863-41fb-9c9f-baf51f200787',
  },
  {
    name: 'X Egg',
    price: '4,50',
    type: 'sandwich',
    image: xEgg,
    uuid: '45065747-1de2-4c80-814b-332f11c9a48c',
  },
  {
    name: 'X Bacon',
    price: '7,00',
    type: 'sandwich',
    image: xBacon,
    uuid: '15efdeb5-ef4c-467c-aca6-88a4bb1f9e86',
  },
  {
    name: 'Fries',
    price: '2,00',
    type: 'extra',
    image: fries,
    uuid: 'd04146ab-a3de-482d-9c80-165952b61ad1',
  },
  {
    name: 'Soft drink',
    price: '2,50',
    type: 'extra',
    image: drink,
    uuid: '5e928311-6e7b-41f4-a343-4792ecbab31f',
  },
];
