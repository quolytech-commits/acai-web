export type StoreLocation = {
  id: number;
  name: string;
  address: string;
  phone: string;
  hours: string;
  mapLink: string;
  tag: string;
  lat: number;
  lng: number;
};

export const LOCATIONS: StoreLocation[] = [
  {
    id: 1,
    name: 'Tirana Flagship',
    address: 'Rruga Lidhja e Prizrenit, Tiranë 1016',
    phone: '+355 69 5100 504',
    hours: 'Mon — Sun: 10:00 - 23:00',
    mapLink: 'https://maps.app.goo.gl/PtHFhff2EShS7Wuh8?g_st=ic',
    tag: 'Flagship Store',
    lat: 41.3217,
    lng: 19.8142,
  },
  {
    id: 2,
    name: 'Kalaja e Tiranës',
    address: '8RGF+34, Tiranë',
    phone: '',
    hours: 'Mon — Sun: 10:00 - 22:00',
    mapLink: 'https://maps.google.com/?q=Kalaja+e+Tiranes',
    tag: 'Tirana',
    lat: 41.3263,
    lng: 19.8227,
  },
  {
    id: 3,
    name: 'Equos Resort',
    address: 'Equos Resort',
    phone: '',
    hours: 'Seasonal',
    mapLink: 'https://maps.google.com/?q=Equos+Resort',
    tag: 'Tirana Area',
    lat: 41.2721,
    lng: 19.8827,
  },
  {
    id: 4,
    name: 'Portside',
    address: 'Portside, Durrës',
    phone: '',
    hours: 'Seasonal',
    mapLink: 'https://maps.google.com/?q=Portside,+Durres',
    tag: 'Durrës',
    lat: 41.3129,
    lng: 19.4449,
  },
  {
    id: 5,
    name: 'Lighthouse',
    address: 'Rruga Ramazan Jella, Durrës',
    phone: '',
    hours: 'Seasonal',
    mapLink: 'https://maps.google.com/?q=Rruga+Ramazan+Jella,+Durres',
    tag: 'Durrës',
    lat: 41.3146,
    lng: 19.4468,
  },
  {
    id: 6,
    name: 'Moyo',
    address: '5J28+9WQ, Palasë',
    phone: '',
    hours: 'Seasonal',
    mapLink: 'https://maps.google.com/?q=5J28+9WQ,+Palasë',
    tag: 'Drymades',
    lat: 40.1633,
    lng: 19.6052,
  },
  {
    id: 7,
    name: 'Poda',
    address: 'SH81 9706, Ksamil',
    phone: '',
    hours: 'Seasonal',
    mapLink: 'https://maps.google.com/?q=SH81+9706,+Ksamil',
    tag: 'Ksamil',
    lat: 39.7733,
    lng: 19.9982,
  },
];
