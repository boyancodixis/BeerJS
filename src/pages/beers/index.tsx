/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @next/next/no-img-element */
import { Roboto } from 'next/font/google';
// import { useEffect, useState } from 'react';
import axios from 'axios';
import Beer from '@/types';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

export async function getServerSideProps() {
  let beerData = [];
  const beerUrl = 'https://api.punkapi.com/v2/beers';
  // const beerData = await axios({
  //   method: 'get',
  //   url: beerUrl,
  // }).catch((error) => {
  //   if (error.response) {
  //     console.log(error.tojS);
  //   }
  // });
  try {
    beerData = await axios.get(beerUrl);
  } catch (error) {
    console.error(error);
  }

  let data = [];
  if (beerData.length === 0) {
    data = [];
  } else {
    data = beerData.data;
  }

  return {
    props: {
      data,
    },

  };
}

const Beers = ({ data } : Beer) => (
  <div className={roboto.className}>
    <h1>Beer JS</h1>
    {data.length === 0 ? <h1>No beers</h1> : (
      <div className="beers_grid">
        {data.map((beer: Beer) => (
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
    )}
  </div>
);
export default Beers;
