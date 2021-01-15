import React from 'react';
import { IonContent, IonHeader, IonPage } from '@ionic/react';
import AlergSearchList from '../components/AlergSearchList';
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
      <IonContent fullscreen className="content">
        <AlergSearchList />
      </IonContent>
    </IonPage>
  );
};

export default Search;