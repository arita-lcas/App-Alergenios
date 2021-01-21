import React from 'react';
import { IonContent, IonHeader, IonPage, IonIcon, IonImg } from '@ionic/react';
import { chevronDownOutline, informationCircle, chevronForwardOutline, chevronBackOutline, starOutline, cartOutline, locationOutline } from 'ionicons/icons';
import { RouteComponentProps } from "react-router-dom";
import AlergHeader from '../components/AlergHeader';
import './Product.css';
import IngredientsPopover from '../components/AlergIngredientsPopover';


function showProfileDiv (event: any) {
  if (event && event.currentTarget && event.currentTarget.id) {
    const elementId = event.currentTarget.id.split('#')[1];

    let element1 = document.getElementById('hiddenProfileContent#'+elementId);
  
    if (element1 && element1.childElementCount > 0) {
      element1.classList.toggle('effect');
    }
  }

  return;
}


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


class Product extends React.Component<
ProductPageProps, 
{product: { id: number, img: string, name: string, brand: string }, 
popoverStatus: any }> {
  state: any = {
    product: {},
    popoverStatus: false
  }

  productId = 0;

  componentDidMount () {
    this.productId = Number(this.props.match.params.id);

    loadData().then((loadDataResponse) => {
      const productTmp = loadDataResponse.filter( (productElement: any) => productElement.id === this.productId )[0];

      this.setState({product: productTmp});
    }).catch((err) => {
      console.log(err.statusText);
    });
  }

  showPopover (value: boolean) {
    this.setState( {
      popoverStatus: value
    })
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
              <div className="productPGridContainer">
                <IonIcon icon={chevronBackOutline} />
                <div className="productPImg"><IonImg src={process.env.PUBLIC_URL + this.state.product.img} /></div>
                <IonIcon icon={chevronForwardOutline} />
              </div>
              <div className="productPIcons">
                <IonIcon icon={starOutline} />
                <IonIcon icon={cartOutline} />
                <IonIcon icon={locationOutline} />
              </div>
            </div>
            <div className="productProfile1 productProfiles" id={"productProfile#"+1} onClick={showProfileDiv}>
              <span>Marta</span>
              <IonIcon icon={chevronDownOutline} />
            </div>
            <div className="hideProfileContent hideProfileBorder1" id={"hiddenProfileContent#"+1}>
              <span className="profileEvaluation">Não contém alergénios para este perfil.</span>
            </div>

            <div className="productProfile2 productProfiles" id={"productProfile#"+2} onClick={showProfileDiv}>
              <span>Sofia</span>
              <IonIcon icon={chevronDownOutline} />
            </div>
            <div className="hideProfileContent hideProfileBorder2" id={"hiddenProfileContent#"+2}>
              <span className="profileEvaluation"><b>Contém lactose</b>, sob as seguintes formas:</span>
              <span className="profileEvaluation profileEvaluationTopic">• Leite em pó</span>
              <span className="profileEvaluation profileEvaluationTopic">• Gordura do leite</span>
            </div>
            {/* <div className="productPIngredients">
              <IonIcon icon={informationCircle} className="ingredientsIcon" />
              <span>Ver ingredientes</span>
            </div> */}
            <IngredientsPopover ingredientsList={this.state.product.ingredients} />
          </div>
        </IonContent>
        
      </IonPage>
    );
  } 
}

export default Product;