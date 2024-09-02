import React from 'react'
import "./../../index.css"
import FoodCard from '../../component/foodcard/foodcard'
import Footer from '../../component/footer/footer'
import Navbar from '../../component/navbar/navbar'
import { PRODUCTS, MAIN_TITLE } from './../../component/configUI/data'
//objects of array to fit all foodcards


//run jsx
function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <h1 className='heading'>{MAIN_TITLE}</h1>

        <div className='foodcard-container'>
          {PRODUCTS.map((foodItem) => {
            return (
              <FoodCard
                key={foodItem.title}  // A unique key prop is important for list items
                imgUrl={foodItem.imgUrl}
                title={foodItem.title}
                description={foodItem.description}
                isveg={foodItem.isveg}
                price={foodItem.price}
              />
            );
          })}
          {/* <FoodCard
          imgurl=" https://img.freepik.com/free-photo/top-view-delicious-noodles-concept_23-2148773775.jpg?t=st=1725182186~exp=1725185786~hmac=b945b78f0726424f5a00321c016bb944a95e44f0d7e5d7fc441bab83e94063d4&w=996"
          title="Noodles"
          description=" Noodles are a good source of carbohydrates, which provide energy for the body."
          isveg={true}
          prize={80}
        />

        <FoodCard
          imgurl="https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?t=st=1725182148~exp=1725185748~hmac=53f3a7d45d154e50d76c700f37ea73387fe52d0460bee47d89f3295b1776f4af&w=740"
          title="Pizza"
          description="The crust is thin and crispy, and the toppings are always fresh and flavorful"
          isveg={true}
          prize={180}
        />
        <FoodCard
          imgurl="https://img.freepik.com/free-photo/view-3d-delicious-looking-burger_23-2150914673.jpg?t=st=1725183232~exp=1725186832~hmac=35885dba50fcffdc437f478fdc2d278e014ef0cb5583629c07930d4a756f6df1&w=740"

          title="Burger"
          description="the best burgers are like life — messy and topped with bacon."
          isveg={true}
          prize={100}
        />
        <FoodCard
          imgurl="https://img.freepik.com/free-photo/juicy-cheeseburger-wooden-cutting-board_9975-24304.jpg?t=st=1725183395~exp=1725186995~hmac=7b42556194337adcca6ab30c6ce3ddb240182bd0a3924e64e3145b17ce1a08c7&w=1380"

          title="Burger"
          description="the best burgers are like life — messy and topped with bacon."
          isveg={false}
          prize={150}
        />
        <FoodCard
          imgurl="https://img.freepik.com/premium-photo/plate-dumplings-with-dip-sauce_1041545-48081.jpg?w=1380"

          title="momos"
          description="Momo are basically dough wrapped around stuffed vegetables or meat.."
          isveg={true}
          prize={80}
        />
        <FoodCard
          imgurl="https://img.freepik.com/premium-photo/gyoza-with-cranberry-horseradish-sauce-yummy-delicious-gyoza-food-image-photography_1295756-158157.jpg?w=996"

          title="momos"
          description="Momo are basically dough wrapped around stuffed vegetables or meat.."
          isveg={false}
          prize={90}
        />
        </div> */}
        </div>
        <Footer />
      </div>
    </div>
  )
}
export default Home