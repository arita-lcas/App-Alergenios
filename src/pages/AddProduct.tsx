import React from 'react';
import { IonContent, IonHeader, IonPage, IonSlides, IonSlide } from '@ionic/react';
import AlergHeader from '../components/AlergHeader';
import './AddProduct.css';

const AddProduct: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <AlergHeader 
          headerLeft={"headerReturn"} 
          headerTitle={""} 
          headerRight={""} />
      </IonHeader>
      <IonContent slot="fixed" className="homeContent">
        <div className="homeWrapper">
          <h1>Sugestões</h1>
          <div className="homeSlidesContainer">
            <IonSlides pager className="homeSlidesContainer">
              <IonSlide>
                <div className="homeGridContainer">
                  <div className="homeProducts"></div>
                  <div className="homeProducts"></div>
                  <div className="homeProducts"></div>
                  <div className="homeProducts"></div>
                </div>
              </IonSlide>
            </IonSlides>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AddProduct;
