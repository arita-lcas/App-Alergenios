import React from 'react';
import './AlergProductCard.css';
import { IonImg, IonIcon } from '@ionic/react';
import { ellipsisVertical } from 'ionicons/icons';



const AlergProductCard: React.FC<{ product: { id: number, img: string, name: string, brand: string } }> = props => {
    return (
        <a href="/product"><div className="productCard">
            <div className="productCardImg"><IonImg src={process.env.PUBLIC_URL + props.product.img} /></div>
            <div className="productDescription">
                <p className="productCardName">{props.product.name}</p>
                <p className="productCardBrand">{props.product.brand}</p>
            </div>
            <IonIcon icon={ellipsisVertical} className="productContextMenu" />
        </div></a>
    );
};

export default AlergProductCard;