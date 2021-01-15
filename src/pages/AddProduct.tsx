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
      <IonContent slot="fixed" className="content">
       
      </IonContent>
    </IonPage>
  );
};

export default AddProduct;
