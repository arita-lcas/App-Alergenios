import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon } from '@ionic/react';
import AlergHeader from '../components/AlergHeader';
import { addCircleOutline } from 'ionicons/icons';
import './Favorites.css';

const Favorites: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <AlergHeader 
          headerLeft={""} 
          headerTitle={"Listas de favoritos"} 
          headerRight={"headerUser"}
          searchedText={""} />
      </IonHeader>
      <IonContent fullscreen className="content">
        <div className="prodListWrapper">
          <div className="prodNewList prodList">
            <IonIcon icon={addCircleOutline} className="prodNewListIcon" />
            <span>Criar nova lista</span>
          </div>
          <div className="prodListName prodList">
            <span>Favoritos</span>
          </div>
          <div className="prodListName prodList">
            <span>Snacks</span>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Favorites;