import React from 'react';
import Slider from 'react-slick';
import { BiSolidRightArrow } from 'react-icons/bi';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import food from '../assets/Products/food.jpg';
import animal from '../assets/Products/animal.jpg';
import culture from '../assets/Products/culture.jpg';
import biogas from '../assets/Products/biogas.png';
import carbon from '../assets/Products/carbon.png';

const Products = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const list = [
    {
      id: 1,
      img: food,
      name: 'Human Food',
      items: [
        'Fresh Nopalitos',
        'Pickles in brine and vinegar',
        'Cactus flour for baked products',
      ],
    description:"Its water content is high, around 90%, and it also contains minerals such as calcium, potassium, magnesium, sodium and small amounts of iron, aluminum, among others. It contains fibers, vitamins A, C, K, B1, B2, B3 and B6 and chlorophyll. It can be prepared roasted, in salads, as well as in brine, vinegar and other preparations. The cactus can be dehydrated and produced flour to make tortillas and baked goods. "
    },
    {
      id: 2,
      img: animal,
      name: 'Animal Food',
      items: ['Fresh nopal', 'Nopal flour', 'Fodder'],
    description:"The foliage can be used as a staple food for goats, sheep and rabbits, and as a dietary supplement, instead of concentrates, for dairy cattle, and as a feed ingredient for monogastric animals, such as pigs. Direct feeding can be used on site, with cattle or goats that feed directly from the plant or can be cut into pieces and made into rations in corrals.Likewise, obtain cactus flour for storage and subsequent administration in winter rations "
    },
    {
      id: 3,
      img: culture,
      name: 'Vermiculture',
      items: ['Humus', 'Organic fertilizer', 'Protein concentrate'],
       description:"Applied to tuna, it allows obtaining two products, humus and worm flour, both of excellent quality and considerable volume. There is usually resistance to the use of earthworms as food or the production of flour because they are used in agricultural waste, however, the cactus allows, through a vegetable crop, the obtaining of products without the negative microbial load associated with waste treatment.The applications of the flour are in feed for chickens. "
    },
    {
      id: 4,
      img: biogas,
      name: 'Energy Production',
      items: [
        'Biogas for heating or direct consumption',
        'Electricity use for internal',
        'Liquid fertilizer',
      ],
      description:"The cultivation of biomass for the production of biogas is exclusive to the tuna; biogas plants in the world normally use agricultural or industrial waste, sewage or similar. The design of processes to produce energy through cultivation and transformation is not usually viable without subsidies, this occurs with ethanol in the USA or biogas in Europe.This problem does not occur with the tuna, which is profitable and competitive   "
    },
    {
      id: 5,
      img: carbon,
      name: 'Carbon Bonus',
      items: [
        'Sale of carbon credits',
        'Positive externalities',
        'Higher sales, corporate image',
        'Fossil fuel replacement',
        'Reforestation arid zones',
      ],
    description:"Among the most important benefits we can indicate the generation of permanent jobs in remote areas of Africa or marginal areas and green or carbon bonds, which will allow, by themselves, the financing of large-scale plantations.Cactus crops for energy multiply life in deserts. The greatest impact is found in the replacement of fossil fuels."
    },
  ];

  return (
    <div id="products  " >
      <div className="w-full mx-auto 2xl:px-[7rem] px-7 py-8">
        <h3 className="2xl:text-4xl text-2xl text-center font-bold text-green-700 mb-16 mt-4">
          ALTERNATIVE USE FOR CACTUS
        </h3>
        <Slider {...settings}>
          {list.map((item) => (
            <div key={item.id} className="p-4">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold text-gray-800">
                    {item.name}
                  </h2>
                  <ul className="mt-2">
                    {item.items.map((data, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <BiSolidRightArrow className="text-green-700 w-4 h-4 mr-2" />
                        {data}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-gray-600 ">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Products;
