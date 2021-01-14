import React from 'react';
import './AlergProductCard.css';
import { IonImg, IonIcon } from '@ionic/react';
import { ellipsisVertical } from 'ionicons/icons';

const AlergProductCard: React.FC<{ product: { id: number, img: string, name: string, brand: string } }> = props => {
    return (
        <div className="productCard">
            <div className="productCardImg"><IonImg src={process.env.PUBLIC_URL + props.product.img} /></div>
            <p className="productCardName">{props.product.name}</p>
            <p className="productCardBrand">{props.product.brand}</p>
            <IonIcon icon={ellipsisVertical} className="productContextMenu" />
        </div>
    );
};

export default AlergProductCard;