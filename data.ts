import { Product } from "./types/product";

const data: { products: Product[] } = {
  products: [
    {
      id: 1,
      name: "Woman in Water",
      category: "people",
      price: 2300,
      currency: {
        name: "USD",
        symbol: "$",
      },
      image: {
        src: "https://res.cloudinary.com/tobijudah/image/upload/q_auto,f_auto/v1653998749/bejamas/man-in-water_zdv7wg.jpg",
        alt: "Woman in Water",
      },
      bestseller: false,
      featured: true,
      details: {
        dimensions: {
          width: 6360,
          height: 4245,
        },
        size: 3340000,
        description:
          "I was having a hard time finding the right angle to shoot this woman carrying rice. I wanted to capture the beauty of her carrying rice as well as her reflection in the lake. I was looking for a way that would show both at once and I found it. This image is really powerful; it is something that you can look at and feel so many different things. You can see how strong she is, but also how fragile her reflection is. You can see how simple her life is and yet how complex it has become. You can see how much work she has done to get this rice from one place to another, but also how beautiful it looks when you put it together like this!",
        recommendations: [
          {
            src: "https://res.cloudinary.com/tobijudah/image/upload/q_auto,f_auto/v1653998778/bejamas/recommendation-1_bpkyzu.jpg",
            alt: "swim at lake",
          },
          {
            src: "https://res.cloudinary.com/tobijudah/image/upload/q_auto,f_auto/v1653998766/bejamas/recommendation-2_wiq6dz.jpg",
            alt: "man at waterfall",
          },
          {
            src: "https://res.cloudinary.com/tobijudah/image/upload/q_auto,f_auto/v1653998779/bejamas/recommendation-3_efdw0u.jpg",
            alt: "picnic at meadow",
          },
        ],
      },
    },
    {
      id: 2,
      name: "Remote Work",
      category: "premium",
      price: 9000,
      currency: {
        name: "USD",
        symbol: "$",
      },
      image: {
        src: "https://res.cloudinary.com/tobijudah/image/upload/q_auto,f_auto/v1653998755/bejamas/remote-work_wdyuff.jpg",
        alt: "Remote Work",
      },
      bestseller: true,
      featured: false,
      details: null,
    },
    {
      id: 3,
      name: "Together",
      category: "people",
      price: 758,
      currency: {
        name: "USD",
        symbol: "$",
      },
      image: {
        src: "https://res.cloudinary.com/tobijudah/image/upload/q_auto,f_auto/v1653998778/bejamas/together_rkcxas.jpg",
        alt: "Together",
      },
      bestseller: false,
      featured: false,
      details: null,
    },
    {
      id: 4,
      name: "Oscillating, Fading",
      category: "people",
      price: 5236,
      currency: {
        name: "USD",
        symbol: "$",
      },
      image: {
        src: "https://res.cloudinary.com/tobijudah/image/upload/q_auto,f_auto/v1653998764/bejamas/oscilating_-fading_fvq4nl.jpg",
        alt: "Oscillating, Fading",
      },
      bestseller: false,
      featured: false,
      details: null,
    },
    {
      id: 5,
      name: "Lonely Dinner",
      category: "food",
      price: 1343,
      currency: {
        name: "USD",
        symbol: "$",
      },
      image: {
        src: "https://res.cloudinary.com/tobijudah/image/upload/q_auto,f_auto/v1654000247/bejamas/lonely-dinner_t8umfs.jpg",
        alt: "Lonely Dinner",
      },
      bestseller: false,
      featured: false,
      details: null,
    },
    {
      id: 6,
      name: "Facials",
      category: "premium",
      price: 336000,
      currency: {
        name: "USD",
        symbol: "$",
      },
      image: {
        src: "https://res.cloudinary.com/tobijudah/image/upload/q_auto,f_auto/v1653998739/bejamas/facials_ssqsbs.jpg",
        alt: "Facials",
      },
      bestseller: true,
      featured: false,
      details: null,
    },
    {
      id: 7,
      name: "Flaitron Building",
      category: "landmarks",
      price: 6570,
      currency: {
        name: "USD",
        symbol: "$",
      },
      image: {
        src: "https://res.cloudinary.com/tobijudah/image/upload/q_auto,f_auto/v1654001101/bejamas/Flatiron-Building_mhd0hh.jpg",
        alt: "Flaitron Building",
      },
      bestseller: true,
      featured: false,
      details: null,
    },
    {
      id: 8,
      name: "Citrus",
      category: "food",
      price: 3380,
      currency: {
        name: "USD",
        symbol: "$",
      },
      image: {
        src: "https://res.cloudinary.com/tobijudah/image/upload/q_auto,f_auto/v1654000239/bejamas/citrus_fahkv2.jpg",
        alt: "Citrus",
      },
      bestseller: false,
      featured: false,
      details: null,
    },
    {
      id: 9,
      name: "London",
      category: "cities",
      price: 5750,
      currency: {
        name: "USD",
        symbol: "$",
      },
      image: {
        src: "https://res.cloudinary.com/tobijudah/image/upload/q_auto,f_auto/v1654001096/bejamas/london-bridge_nha4zj.jpg",
        alt: "London",
      },
      bestseller: true,
      featured: false,
      details: null,
    },
    {
      id: 10,
      name: "Spectrum",
      category: "premium",
      price: 47200,
      currency: {
        name: "USD",
        symbol: "$",
      },
      image: {
        src: "https://res.cloudinary.com/tobijudah/image/upload/q_auto,f_auto/v1653998738/bejamas/spectrum_c2sjsa.jpg",
        alt: "Spectrum",
      },
      bestseller: false,
      featured: false,
      details: null,
    },
    {
      id: 11,
      name: "US",
      category: "people",
      price: 2000,
      currency: {
        name: "USD",
        symbol: "$",
      },
      image: {
        src: "https://res.cloudinary.com/tobijudah/image/upload/q_auto,f_auto/v1653998738/bejamas/us_bczpv3.jpg",
        alt: "US",
      },
      bestseller: false,
      featured: false,
      details: null,
    },
    {
      id: 12,
      name: "The Carvings",
      category: "landmarks",
      price: 500,
      currency: {
        name: "USD",
        symbol: "$",
      },
      image: {
        src: "https://res.cloudinary.com/tobijudah/image/upload/q_auto,f_auto/v1654001093/bejamas/the-Carvings_aypoll.jpg",
        alt: "The Carvings",
      },
      bestseller: true,
      featured: false,
      details: null,
    },
    {
      id: 13,
      name: "Peering Cat",
      category: "pets",
      price: 110,
      currency: {
        name: "USD",
        symbol: "$",
      },
      image: {
        src: "https://res.cloudinary.com/tobijudah/image/upload/q_auto,f_auto/v1654000251/bejamas/peering-cat_ikbqhd.jpg",
        alt: "Peering Cat",
      },
      bestseller: false,
      featured: false,
      details: null,
    },
    {
      id: 14,
      name: "Waves",
      category: "nature",
      price: 13400,
      currency: {
        name: "USD",
        symbol: "$",
      },
      image: {
        src: "https://res.cloudinary.com/tobijudah/image/upload/q_auto,f_auto/v1654002192/bejamas/waves_csviqe.jpg",
        alt: "Waves",
      },
      bestseller: false,
      featured: false,
      details: null,
    },
    {
      id: 15,
      name: "Dog",
      category: "pets",
      price: 330,
      currency: {
        name: "USD",
        symbol: "$",
      },
      image: {
        src: "https://res.cloudinary.com/tobijudah/image/upload/q_auto,f_auto/v1654000262/bejamas/dog_ow3dyd.jpg",
        alt: "Dog",
      },
      bestseller: false,
      featured: false,
      details: null,
    },
    {
      id: 16,
      name: "Pergamon Ruins",
      category: "landmarks",
      price: 7500,
      currency: {
        name: "USD",
        symbol: "$",
      },
      image: {
        src: "https://res.cloudinary.com/tobijudah/image/upload/q_auto,f_auto/v1654001099/bejamas/Ruins-of-Pergamon_fqtan1.jpg",
        alt: "Pergamon Ruins",
      },
      bestseller: false,
      featured: false,
      details: null,
    },
    {
      id: 17,
      name: "Spice of Life",
      category: "food",
      price: 520,
      currency: {
        name: "USD",
        symbol: "$",
      },
      image: {
        src: "https://res.cloudinary.com/tobijudah/image/upload/q_auto,f_auto/v1654000242/bejamas/spice-up_k3vmlp.jpg",
        alt: "Spice of Life",
      },
      bestseller: false,
      featured: false,
      details: null,
    },
    {
      id: 18,
      name: "Peaks",
      category: "nature",
      price: 30000,
      currency: {
        name: "USD",
        symbol: "$",
      },
      image: {
        src: "https://res.cloudinary.com/tobijudah/image/upload/q_auto,f_auto/v1654002233/bejamas/peaks_mqts10.jpg",
        alt: "Peaks",
      },
      bestseller: true,
      featured: false,
      details: null,
    },
    {
      id: 19,
      name: "Spring Bloom",
      category: "nature",
      price: 2750,
      currency: {
        name: "USD",
        symbol: "$",
      },
      image: {
        src: "https://res.cloudinary.com/tobijudah/image/upload/q_auto,f_auto/v1653998746/bejamas/spring_bloom_pbiuiq.jpg",
        alt: "Spring Bloom",
      },
      bestseller: false,
      featured: false,
      details: null,
    },
    {
      id: 20,
      name: "Night City",
      category: "cities",
      price: 1000,
      currency: {
        name: "USD",
        symbol: "$",
      },
      image: {
        src: "https://res.cloudinary.com/tobijudah/image/upload/q_auto,f_auto/v1653998740/bejamas/night_city_oqfgox.jpg",
        alt: "Night City",
      },
      bestseller: true,
      featured: false,
      details: null,
    },
    {
      id: 21,
      name: "Inflection of you",
      category: "people",
      price: 4000,
      currency: {
        name: "USD",
        symbol: "$",
      },
      image: {
        src: "https://res.cloudinary.com/tobijudah/image/upload/q_auto,f_auto/v1653998743/bejamas/inflection-of-you_ijdum9.jpg",
        alt: "Inflection of you",
      },
      bestseller: false,
      featured: false,
      details: null,
    },
    {
      id: 20,
      name: "Home",
      category: "premium",
      price: 100000,
      currency: {
        name: "USD",
        symbol: "$",
      },
      image: {
        src: "https://res.cloudinary.com/tobijudah/image/upload/q_auto,f_auto/v1653998745/bejamas/plant-_-chair_tcuzxu.jpg",
        alt: "Home",
      },
      bestseller: true,
      featured: false,
      details: null,
    },
  ],
};

export default data;
