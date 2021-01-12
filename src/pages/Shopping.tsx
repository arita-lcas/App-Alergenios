import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Shopping.css';
import { personCircleOutline } from 'ionicons/icons';

const Shopping: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <div className="toolbarGridContainer">
            <div></div>
            <div className="toolbarGridCol">
              <IonTitle className="toolbarTitle">Listas de compras</IonTitle>
            </div>
            <div className="toolbarGridCol">
              <IonIcon icon={personCircleOutline} className="userToolbarIcon" />
              <br />
              <span className="userToolbarText">Marta</span>
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

export default Shopping;