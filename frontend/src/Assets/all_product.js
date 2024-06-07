import dog from '../Assets/pictures/dog.jpg';
import cat from '../Assets/pictures/cat.jpg';
import rabbit from '../Assets/pictures/rabbit.jpg';
import parrot from '../Assets/pictures/parrot.jpg';
import dove from '../Assets/pictures/dove.jpg';
import fish from '../Assets/pictures/fish.jpg';
import hamster from '../Assets/pictures/hamster.jpg';
import Hedgehog from '../Assets/pictures/Hedgehog.jpg';
import snake from '../Assets/pictures/snake.jpg';
import mouse from '../Assets/pictures/mouse.jpg';
import ladybug from '../Assets/pictures/ladybug.jpg';
import koala from '../Assets/pictures/koala.jpg';
import camera from '../Assets/pictures/camera.jpg';
import playstation from '../Assets/pictures/playstation.jpg';
import iphone from '../Assets/pictures/iphone.jpg';
import computer from '../Assets/pictures/computer.jpg';
import air_conditioner from '../Assets/pictures/air_conditioner.jpg';
import Android from '../Assets/pictures/Android.jpg';
import electric_car from '../Assets/pictures/electric_car.jpg';
import fan from '../Assets/pictures/fan.jpg';
import helicopter from '../Assets/pictures/helicopter.jpg';
import microphone from '../Assets/pictures/microphone.jpg';
import microwave from '../Assets/pictures/microwave.jpg';
import tv from '../Assets/pictures/tv.jpg';
import jacket1 from '../Assets/pictures/jacket1.png';
import jacket2 from '../Assets/pictures/jacket2.png';
import jacket3 from '../Assets/pictures/jacket3.png';
import jacket4 from '../Assets/pictures/jacket4.png';
import A_dress_set_for_a_girl from '../Assets/pictures/A_dress_set_for_a_girl.jpg';
import A_white_shirt_for_a_man from '../Assets/pictures/A_white_shirt_for_a_man.jpg';
import A_yellow_shirt_for_a_girl from '../Assets/pictures/A_yellow_shirt_for_a_girl.jpg';
import black_suit from '../Assets/pictures/black_suit.jpg';
import Purple_suit_set from '../Assets/pictures/Purple_suit_set.jpg';
import Short_blue_shirt_for_a_boy from '../Assets/pictures/Short_blue_shirt_for_a_boy.jpg';
import Superman_suit_set_for_a_boy from '../Assets/pictures/Superman_suit_set_for_a_boy.jpg';
import White_suit_set_for_a_boy from '../Assets/pictures/White_suit_set_for_a_boy.jpg';


let all_product = [
  {
    id: 1,
    name: 'cat',
    category: 'pet',
    image: cat,
    new_price: 50.0,
    old_price: 80.5,
  },
  {
    id: 2,
    name: 'dog',
    category: 'pet',
    image: dog,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 3,
    name: 'rabbit',
    category: 'pet',
    image: rabbit,
    new_price: 20,
    old_price: 60,
  },
  {
    id: 4,
    name: 'parrot',
    category: 'pet',
    image: parrot,
    new_price: 100.0,
    old_price: 150.0,
  },
  {
    id: 5,
    name: 'camera',
    category: 'electric',
    image: camera,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 6,
    name: 'playstation',
    category: 'electric',
    image: playstation,
    new_price: 555,
    old_price: 1555,
  },
  {
    id: 7,
    name: 'iphone',
    category: 'electric',
    image: iphone,
    new_price: 1799,
    old_price: 2000,
  },
  {
    id: 8,
    name: 'computer',
    category: 'electric',
    image: computer,
    new_price: 85,
    old_price: 120.5,
  },
  {
    id: 9,
    name: 'Blue sweatshirt',
    category: 'clothes',
    image: jacket1,
    new_price: 35,
    old_price: 100,
  },
  {
    id: 10,
    name: 'Red coat',
    category: 'clothes',
    image: jacket2,
    new_price: 85,
    old_price: 160,
  },
  {
    id: 11,
    name: 'Yellow sweatshirt',
    category: 'clothes',
    image: jacket3,
    new_price: 88,
    old_price: 130,
  },
  {
    id: 12,
    name: 'Black jacket',
    category: 'clothes',
    image: jacket4,
    new_price: 70,
    old_price: 99,
  },
  {
    id: 13,
    name: 'dove',
    category: 'pet',
    image: dove,
    new_price: 15,
    old_price: 22,
  },
  {
    id: 14,
    name: 'fish',
    category: 'pet',
    image: fish,
    new_price: 22,
    old_price: 33,
  },
  {
    id: 15,
    name: 'hamster',
    category: 'pet',
    image: hamster,
    new_price: 33,
    old_price: 52,
  },
  {
    id: 16,
    name: 'koala',
    category: 'pet',
    image: koala,
    new_price: 28,
    old_price: 64,
  },
  {
    id: 17,
    name: 'Hedgehog',
    category: 'pet',
    image: Hedgehog,
    new_price: 70,
    old_price: 112,
  },
  {
    id: 18,
    name: 'snake',
    category: 'pet',
    image: snake,
    new_price: 67,
    old_price: 100,
  },
  {
    id: 19,
    name: 'ladybug',
    category: 'pet',
    image: ladybug,
    new_price: 36,
    old_price: 44,
  },
  {
    id: 20,
    name: 'mouse',
    category: 'pet',
    image: mouse,
    new_price: 2,
    old_price: 10,
  },
  
  {
    id: 21,
    name: 'air conditioner',
    category: 'electric',
    image: air_conditioner,
    new_price: 200,
    old_price: 255,
  },
  {
    id: 22,
    name: 'Android',
    category: 'electric',
    image: Android,
    new_price: 300,
    old_price: 349,
  },
  {
    id: 23,
    name: 'electric car',
    category: 'electric',
    image: electric_car,
    new_price: 4500,
    old_price: 5000,
  },
  {
    id: 24,
    name: 'fan',
    category: 'electric',
    image: fan,
    new_price: 15,
    old_price: 30,
  },
  {
    id: 25,
    name: 'helicopter',
    category: 'electric',
    image: helicopter,
    new_price: 23,
    old_price: 32,
  },
  {
    id: 26,
    name: 'microphone',
    category: 'electric',
    image: microphone,
    new_price: 25,
    old_price: 36,
  },
  {
    id: 27,
    name: 'microwave',
    category: 'electric',
    image: microwave,
    new_price: 19,
    old_price: 38,
  },
  {
    id: 28,
    name: 'tv',
    category: 'electric',
    image: tv,
    new_price: 350,
    old_price: 700,
  },
  {
    id: 29,
    name: 'A dress set for a girl',
    category: 'clothes',
    image: A_dress_set_for_a_girl,
    new_price: 25,
    old_price: 50,
  },
  {
    id: 30,
    name: 'A white shirt for a man',
    category: 'clothes',
    image: A_white_shirt_for_a_man,
    new_price: 30,
    old_price: 55,
  },
  {
    id: 31,
    name: 'A yellow shirt for a girl',
    category: 'clothes',
    image: A_yellow_shirt_for_a_girl,
    new_price: 62,
    old_price: 76,
  },
  {
    id: 32,
    name: 'black suit',
    category: 'clothes',
    image: black_suit,
    new_price: 99,
    old_price: 199,
  },
  {
    id: 33,
    name: 'Purple suit set',
    category: 'clothes',
    image: Purple_suit_set,
    new_price: 99,
    old_price: 199,
  },
  {
    id: 34,
    name: 'Short blue shirt for a boy',
    category: 'clothes',
    image: Short_blue_shirt_for_a_boy,
    new_price: 88,
    old_price: 179,
  },
  {
    id: 35,
    name: 'Superman suit set for a boy',
    category: 'clothes',
    image: Superman_suit_set_for_a_boy,
    new_price: 77,
    old_price: 99,
  },
  {
    id: 36,
    name: 'White suit set for a boy',
    category: 'clothes',
    image: White_suit_set_for_a_boy,
    new_price: 55,
    old_price: 105,
  },


];

export default all_product;
