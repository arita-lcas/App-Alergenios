import React from 'react';
import { IonPage, IonHeader, IonContent, IonIcon } from '@ionic/react';
import { personCircle, pencilSharp, addCircleSharp } from 'ionicons/icons';
import AlergHeader from '../components/AlergHeader';
import './FavoritesList.css';

const FavoritesList: React.FC = () => {
  return(
    <IonPage>
      <IonHeader>
        <AlergHeader 
            headerLeft={"headerReturn"} 
            headerTitle={"Favoritos"} 
            headerRight={"headerEdit"}
            searchedText={""} />
      </IonHeader>
      <IonContent slot="fixed" className="content">
        <div className="favoritesListWrapper">

        </div>
      </IonContent>
    </IonPage>
  );
}

export default FavoritesList;