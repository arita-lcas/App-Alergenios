import React from 'react';
import './AlergHomeGrid.css';
import AlergProductCard from '../components/AlergProductCard';

const AlergHomeGrid: React.FC<{ productSlide: { id: number, img: string, name: string, brand: string }[] }> = props => {
    return (
        <div className="homeGridContainer">
            <AlergProductCard product={props.productSlide[0]} />
            <AlergProductCard product={props.productSlide[1]} />
            <AlergProductCard product={props.productSlide[2]} />
            <AlergProductCard product={props.productSlide[3]} />
        </div>
    );
}

export default AlergHomeGrid;

