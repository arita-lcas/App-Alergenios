import React from 'react';
import './AlergHomeGrid.css';
import AlergProductCard from '../components/AlergProductCard';


// const historyFunc = () => history.push('../pages/Product');


const AlergHomeGrid: React.FC<{ productSlide: { id: number, img: string, name: string, brand: string }[] }> = props => {
    return (
        <div className="homeGridContainer">
            <a href="/product"><AlergProductCard product={props.productSlide[0]} /></a>
            <AlergProductCard product={props.productSlide[1]} />
            <AlergProductCard product={props.productSlide[2]} />
            <AlergProductCard product={props.productSlide[3]} />
        </div>
    );
}

export default AlergHomeGrid;


// React.FC<{ productSlide: { id: number, img: string, name: string, brand: string }[] }>

