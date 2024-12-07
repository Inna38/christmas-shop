import { addBurgerClickHandler } from "./Burger";
import { addModalClickHandler } from "./Modal";
import { addSlider } from "./Slider";
import { addTagsClickHandler } from "./Tags";
import { addTimer } from "./Timer";


window.onload = function () {
  addModalClickHandler();
  addTagsClickHandler();
  addBurgerClickHandler();
  addSlider();
  
      setInterval(() => {
addTimer()
    }, 1000);
};