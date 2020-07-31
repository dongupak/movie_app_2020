import React from 'react';

function Food({name, picture}) {
  return (
    <div>
      <h2>I love {name}</h2>
      <img src={picture} width="200" />
    </div>
  );
}

const foodILike = [
  {
    name: 'Kimchi',
    image : 'http://aeriskitchen.com/wp-content/uploads/2020/04/Kimchi_Soybean_Sprout_GukBap_00-.jpg'
  },
  {
    name: 'Samgyeopsal',
    image: 'https://crcf.cookatmarket.com/product/images/2019/12/muja_1577338909_4776_720.jpg'
  },
];

function renderFood(dish) {
  return <Food name={dish.name} picture={dish.image} />
}
function App() {
  return <div> 
    {foodILike.map( renderFood )}
    </div>
}

export default App;