import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import AlergHeader from '../components/AlergHeader';
import './Favorites.css';

const Favorites: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <AlergHeader headerTitle={"Listas de favoritos"} />
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 4 page" />
      </IonContent>
    </IonPage>
  );
};

export default Favorites;