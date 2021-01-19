import React from 'react';
import { IonContent, IonHeader, IonPage, IonIcon } from '@ionic/react';
import { chevronDownOutline, informationCircle } from 'ionicons/icons';
import AlergHeader from '../components/AlergHeader';
import './Product.css';


// const homeProductsInfo = [
//     "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"
// ];

// for (let i = 0; i < homeProductsInfo.length; i++) {
//    let prodTitle = homeProductsInfo[i];
// }

// function teste (posArr: any) {
//     return homeProductsInfo[posArr];
// }


const Product: React.FC<{ productTeste: string }> = props => {
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
                        <h1 className="alergTitle">Título</h1>
                        <span>Marca</span>
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

export default Product;