import React from 'react';
import { IonIcon, IonImg } from '@ionic/react';
import { ellipsisVertical } from 'ionicons/icons';
import './AlergProductCard.css';
import { withRouter, RouteComponentProps  } from 'react-router-dom';



interface AlergProductCardProps extends RouteComponentProps {
  product: { id: number, img: string, name: string, brand: string }
}

class AlergProductCard extends React.Component<AlergProductCardProps> {
  openProductPage (event: any) {
    if (event && event.target) {
      this.props.history.push(`/tab3/product/${this.props.product.id}`);
    }
  };

  render () {
    return (
      <div className="productCard" onClick={this.openProductPage.bind(this)}>
        <div className="productCardImg"><IonImg src={process.env.PUBLIC_URL + this.props.product.img} /></div>
        <div className="productDescription">
            <p className="productCardName">{this.props.product.name}</p>
            <p className="productCardBrand">{this.props.product.brand}</p>
        </div>
        <IonIcon icon={ellipsisVertical} className="productContextMenu" />
      </div>
    );
  }
}

export default withRouter(AlergProductCard);