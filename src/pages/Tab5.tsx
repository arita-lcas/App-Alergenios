import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab5.css';
import { personCircleOutline } from 'ionicons/icons';

const Tab5: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <div className="toolBar">
            <IonTitle className="toolBarTitle">Listas de compras</IonTitle>
            <div className="userBar">
              <IonIcon icon={personCircleOutline} className="userBarIcon" />
              <p className="userBarText">Marta</p>
            </div>
          </div>
          
        </IonToolbar>
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

export default Tab5;