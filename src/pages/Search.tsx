import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import AlergHeader from '../components/AlergHeader';
import './Search.css';

const Search: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <AlergHeader 
          headerLeft={""} 
          headerTitle={"headerSearch"} 
          headerRight={""} />
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 3 page" />
      </IonContent>
    </IonPage>
  );
};

export default Search;
