import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import AlergHeader from '../components/AlergHeader';
import './Shopping.css';

const Shopping: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <AlergHeader headerTitle={"Listas de compras"} />
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 5</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 5 page" />
      </IonContent>
    </IonPage>
  );
};

export default Shopping;