import React from 'react';
import { IonImg } from '@ionic/react';
import './AlergHomeGrid.css';

const AlergHomeGrid: React.FC<{ product: { id: number, img: string, name: string, brand: string }[] }> = props => {
    return (
        <div className="homeGridContainer">
            <div className="homeProducts">
                <div className="homeProductImg"><IonImg src={process.env.PUBLIC_URL + props.product[0].img} /></div>
            </div>
            <div className="homeProducts">
                <div className="homeProductImg"><IonImg src={process.env.PUBLIC_URL + props.product[1].img} /></div>
            </div>
            <div className="homeProducts">
                <div className="homeProductImg"><IonImg src={process.env.PUBLIC_URL + props.product[2].img} /></div>
            </div>
            <div className="homeProducts">
                <div className="homeProductImg"><IonImg src={process.env.PUBLIC_URL + props.product[3].img} /></div>
            </div>
        </div>
    );
}

export default AlergHomeGrid;


/*<span>{props.product[0].name}</span>*/