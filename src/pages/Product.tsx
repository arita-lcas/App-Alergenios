import React from 'react';
import { IonContent, IonHeader, IonPage, IonIcon } from '@ionic/react';
import { chevronDownOutline, informationCircle } from 'ionicons/icons';
import { RouteComponentProps } from "react-router-dom";
import AlergHeader from '../components/AlergHeader';
import './Product.css';


async function loadData() {
  let response = await fetch(process.env.PUBLIC_URL + 'data/products.json' ,{
        headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
  });
  if (response.status != 200) {
    throw response;
  } else {
    return await response.json();
  }
}

interface ProductPageProps extends RouteComponentProps<{
  id: string;
}> {}


class Product extends React.Component<ProductPageProps, {product: { id: number, img: string, name: string, brand: string }}> {

  state: any = {
    product: {}
  }

  productId = 0;

  componentDidMount () {
    this.productId = Number(this.props.match.params.id);

    console.log(this.productId);

    loadData().then((loadDataResponse) => {

      const productTmp = loadDataResponse.filter( (productElement: any) => productElement.id === this.productId )[0];

      this.setState({product: productTmp});
    }).catch((err) => {
      console.log(err.statusText);
    });
  }


  render () {
    return (
      <IonPage>
        <IonHeader>
            <AlergHeader 
                headerLeft={"headerReturn"} 
                headerTitle={""} 
                headerRight={"headerEdit"} />
        </IonHeader>
        <IonContent className="content">
          <div className="productPWrapper">
            <div className="productPInfo">
              <h1 className="alergTitle">{this.state.product.name}</h1>
                <span>{this.state.product.brand}</span>
                <div className="productPImg"></div>
            </div>
            <div className="productProfile1 productProfiles">
              <span>Marta</span>
              <IonIcon icon={chevronDownOutline} />
            </div>
            <div className="productProfile2 productProfiles">
              <span>Sofia</span>
              <IonIcon icon={chevronDownOutline} />
            </div>
            <div className="productPIngredients">
              <IonIcon icon={informationCircle} className="ingredientsIcon" />
              <span>Ver ingredientes</span>
            </div>
          </div>
        </IonContent>
      </IonPage>
    );
  } 
}

export default Product;