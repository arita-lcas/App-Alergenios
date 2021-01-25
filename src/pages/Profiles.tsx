import React from 'react';
import { IonPage, IonHeader, IonContent } from '@ionic/react';
import AlergHeader from '../components/AlergHeader';
import './Profiles.css';

const Profiles: React.FC = () => {
  return (
    <IonPage>
        <IonHeader>
          <AlergHeader 
            headerLeft={"headerReturn"} 
            headerTitle={""} 
            headerRight={""}
            searchedText={""} />
        </IonHeader>
        <IonContent slot="fixed" className="content">
          <div className="profilesPWrapper">
            <span>Selecione o perfil que quiser ativar</span>
            <div className="profilesGridContainer">
              <div className="profileContainer"></div>
              <div className="profileContainer"></div>
              <div className="profileContainer"></div>
            </div>
            <span>Alterar idioma</span>
          </div>
        </IonContent>
    </IonPage>
  );
}

export default Profiles;