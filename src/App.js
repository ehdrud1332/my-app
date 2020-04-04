import React from 'react';
import Potato from "./potato";

const foodILike = [
    {
        id: 1,
        name: "Kimchi",
        rating: 4.0,
        image:
            "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
    },
    {
        id:2,
        name: "Samgyeopsal",
        rating: 4.4,
        image:
            "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg"
    },
    {
        id:3,
        name: "Bibimbap",
        rating: 5.0,
        image:
            "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb"
    },
    {
        id:4,
        name: "Doncasu",
        rating: 5.0,
        image:
            "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
    },
    {
        id: 5,
        name: "Kimbap",
        rating: 5.0,
        image:
            "http://cdn2.koreanbasang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg"
    }
];

function App() {
  return (
    <div>
      <text>
        jaemin app
      </text>
        {foodILike.map(dish => (
            <Potato key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
        ))}

    </div>
  );
}

export default App;
