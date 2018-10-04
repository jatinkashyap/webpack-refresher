import React from 'react';
import classes from './PizzaImage.css';
import pizzaImg from '../../assets/Pizza.jpg';


const pizzaImage = (props) => {
    <div classNam={classes.PizzaImage}>
        <img className={classes.PizzaImg} src={pizzaImg} alt="pizza"/>
    </div>
}

export default pizzaImage;