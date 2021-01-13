import React from 'react';
import { } from '@ionic/react';
import './AlergHomeGrid.css';

const AlergHomeGrid: React.FC<{ product: { id: number, img: string, name: string, brand: string }[] }> = props => {
    return (
        <div className="homeGridContainer">
            <div className="homeProducts">
                <div className="homeProductImg"><img src={props.product[0].img} /></div>
            </div>
            <div className="homeProducts">
                <div className="homeProductImg"><img src={props.product[1].img} /></div>
            </div>
            <div className="homeProducts">
                <div className="homeProductImg"><img src={props.product[2].img} /></div>
            </div>
            <div className="homeProducts">
                <div className="homeProductImg"><img src={props.product[3].img} /></div>
            </div>
        </div>
    );
}

export default AlergHomeGrid;


/*<span>{props.product[0].name}</span>*/