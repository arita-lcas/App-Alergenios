import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon } from '@ionic/react';
import AlergHeader from '../components/AlergHeader';
import { addCircleOutline } from 'ionicons/icons';
import './Shopping.css';

const Shopping: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <AlergHeader 
          headerLeft={""} 
          headerTitle={"Listas de compras"} 
          headerRight={"headerUser"} />
      </IonHeader>
      <IonContent fullscreen className="content">
        <div className="prodListWrapper">
          <div className="prodNewList prodList">
            <IonIcon icon={addCircleOutline} className="prodNewListIcon" />
            <span>Criar nova lista</span>
          </div>
          <div className="prodListName prodList">
            <span>Compras gerais</span>
          </div>
          <div className="prodListName prodList">
            <span>Compras semanais</span>
          </div>
          <div className="prodListName prodList">
            <span>Sobremesa</span>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Shopping;