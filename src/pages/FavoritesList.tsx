import React from 'react';
import { IonPage, IonHeader, IonContent, IonImg } from '@ionic/react';
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
          <div className="favoritesListImg">
            <IonImg src={process.env.PUBLIC_URL + "/assets/img/item-1.jpg"} />
          </div>
          <div className="favoritesProdDescription">
            <span className="favoritesProdName">Yofu Soja Natural</span>
            <span className="favoritesProdBrand">Alpro</span>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}

export default FavoritesList;