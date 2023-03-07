/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @next/next/no-img-element */
import { Roboto } from 'next/font/google';
// import { useEffect, useState } from 'react';
import axios from 'axios';

type Beer = {
  id: number,
  name: string,
  tagline: string,
  first_brewed: string,
  description: string,
  image_url: string,
  abv: number,
  ibu: number,
  target_fg: number,
  target_og: number,
  ebc:number,
  srm:number,
  ph:number,
  attenuation_level: number,
  volume: {
    value: number,
    unit: string
  },
  boil_volue: {
    value: number,
    unit: string
  },
  method: {
    mash_temp: [{
      temp: {
        value: number,
        unit: string
      },
      duration: number,
    },
    ],
    fermantation: {
      temp: {
        value: number,
        unit: string
      }
    },
    twist: null;
  },
  ingredients: {
    malt: [{
      name: string,
      amount: {
        value: number,
        unit: string
      },
    },
    {
      name: string,
      amount: {
        value: number,
        unit: string
      },
    },
    {
      name: string,
      amount: {
        value: number,
        unit: string
      },
    },
    ],
    hops: [
      {
        name: string,
        amount: {
          value: number,
          unit: string
        }
        add: string,
        attribute: string,
      },
      {
        name: string,
        amount: {
          value: number,
          unit: string
        }
        add: string,
        attribute: string
      },
      {
        name: string,
        amount: {
          value: number,
          unit: string
        }
        add: string,
        attribute: string
      },
      {
        name: string,
        amount: {
          value: number,
          unit: string
        }
        add: string,
        attribute: string
      },
    ],
    yeast: string
  },
  food_pairing: [
    string,
  ],
  brewers_tips: string,
  contributed_by: string
};

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

export async function getServerSideProps() {
  const beerUrl = 'https://api.punkapi.com/v2/beers';
  const beerData = await axios({
    method: 'get',
    url: beerUrl,
  });
  let data = [];
  data = beerData.data;

  return {
    props: {
      data,
    },

  };
}

const Beers = ({ data } : Beer) => (
  <div className={roboto.className}>
    <h1>Beer page</h1>
    <div className="beers_grid">
      {data.splice(1, 10).map((beer: Beer) => (
        <div key={beer.id} className="beers">
          <img src={beer.image_url} alt="beer_image" />
          <h1 className="beer_name">{beer.name}</h1>
          <h2>{beer.tagline}</h2>
          <h3>
            {beer.abv}
            %
          </h3>
        </div>
      ))}
    </div>
  </div>
);
export default Beers;
