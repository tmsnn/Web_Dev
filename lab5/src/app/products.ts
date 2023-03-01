import { Category } from "./categories";

export class Product {
  id: number | undefined;
  name: string | undefined;
  price: number | undefined;
  details: string;
  photo: string;
  description: string | undefined;
  like: number ;
  category: string | undefined;

  constructor() {
    this.details = '';
    this.photo = '';
    this.like = 0;
  }
}

export const products = [
  {
    id: 1,
    name: 'Смартфон Apple iPhone 14 Pro Max 256Gb фиолетовый',
    price: 695480,
    description: 'A large phone with one of the best screens',
    details:
      'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000#!/item',
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/h18/62948780834846/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg',
    category: "1",
    like: 0,
  },
  {
    id: 2,
    name: 'Морозильник Leadbros BC/BD375L 375 л коричневый',
    price: 146200,
    description: 'A great freezer with one of the best cameras',
    details:
      'https://kaspi.kz/shop/p/leadbros-bc-bd375l-375-l-korichnevyi-107704055/?c=750000000#!/item',
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h82/h16/66097598529566/leadbros-bc-bd375l-375-l-korichnevyi-107704055-1.jpg',
    category: "2",
    like: 0,
  },
  {
    id: 3,
    name: 'Смарт-часы Apple Watch SE 2nd Gen 40 мм серебристый-белый',
    price: 299,
    description: 'Great present for girls',
    details:
      'https://kaspi.kz/shop/p/apple-watch-se-2nd-gen-40-mm-serebristyi-belyi-106362779/?c=750000000#!/item',
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdd/h7c/62711077961758/apple-watch-se-2nd-generation-40-mm-serebristyj-belyj-106362779-1.jpg',
    category: "1",
    like: 0,
  },
  {
    id: 4,
    name: 'Dyson Pure Humidify+Cool PH04',
    price: 584990,
    description: 'Clean and safe air',
    details:
      'https://kaspi.kz/shop/p/dyson-pure-humidify-cool-ph04-106228300/?c=750000000#!/item',
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h47/h49/62040187863070/dyson-pure-humidify-cool-ph04-106228300-1.jpg',
    category: "2",
    like: 0,
  },
  {
    id: 5,
    name: 'Смартфон Samsung Galaxy A13 4 ГБ/64 ГБ голубой',
    price: 80780,
    description: 'Good smartphone with high quality',
    details:
      'https://kaspi.kz/shop/p/samsung-galaxy-a13-4-gb-64-gb-goluboi-104253442/?c=750000000#!/item',
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1c/h79/49613837074462/smartfon-samsung-galaxy-a13-64gb-sm-a135flbvskz-blue-104253442-1.jpg',
    category: "1",
    like: 0,
  },
  {
    id: 6,
    name: 'Шкаф Istikbal Rita 5D, 211x62x210, слоновая кость',
    price: 500000,
    description: 'Beautiful and bright furniture',
    details:
      'https://kaspi.kz/shop/p/istikbal-rita-5d-211x62x210-slonovaja-kost--108387311/?c=750000000#!/item',
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h96/ha3/67756041142302/mondi-rita-108387311-1.jpg',
    category: "4",
    like: 0,
  },
  {
    id: 7,
    name: 'Домашний кинотеатр LG LHB655NK',
    price: 190934,
    description: 'watch your favourite film at home',
    details: 'https://kaspi.kz/shop/p/lg-lhb655nk-2100099/?c=750000000#!/itema',
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h57/hf7/31583642517534/lg-lhb655nk-cernyj-2100099-1-Container.jpg',
    category: "2",
    like: 0,
  },
  {
    id: 8,
    name: 'Тостер WMF Lumero серебристый',
    price: 202800,
    description: 'Guarantee of your tasty breakfast',
    details:
      'https://kaspi.kz/shop/p/wmf-lumero-serebristyi-103886410/?c=750000000#!/item',
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h55/h5d/48988765093918/wmf-lumero-103886410-1.jpg',
    category: "2",
    like: 0,
  },
  {
    id: 9,
    name: 'Стиральная машина Samsung WF18T8000GV/LP черный',
    price: 632750,
    description: 'Wash and care about your clothes',
    details:
      'https://kaspi.kz/shop/p/samsung-wf18t8000gv-lp-chernyi-101703431/?c=750000000#!/item',
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he9/h9c/34083757948958/samsung-wf18t8000gv-lp-cernyj-101703431-1-Container.jpg',
    category: "2",
    like: 0,
  },
  {
    id: 10,
    name: 'Робот-пылесос Miele SPQL0 Scout RX3 Home Vision HD черный, золотистый',
    price: 504900,
    description: 'Clean your home with love',
    details:
      'https://kaspi.kz/shop/p/miele-spql0-scout-rx3-home-vision-hd-chernyi-zolotistyi-105586351/?c=750000000#!/item',
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5b/he2/52047057092638/miele-spql0-scout-rx3-home-vision-hd-zolotistyj-105586351-1.jpg',
    category: "2",
    like: 0,
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/