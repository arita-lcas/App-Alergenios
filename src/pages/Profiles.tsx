import React from 'react';
import { IonPage, IonHeader, IonContent, IonIcon } from '@ionic/react';
import { personCircle, pencilSharp, addCircleSharp } from 'ionicons/icons';
import AlergHeader from '../components/AlergHeader';
import './Profiles.css';


 function activateMarta (event:any) {

   if (event && event.target) {
     let element2 = document.getElementById('martaBorder');
  
     if (element2 && element2.childElementCount > 0) {
       element2.classList.toggle('hideProfileBorder');
     }
   }

   return;
 }

 
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
              <div className="profileContainer" onClick={activateMarta}>
                <div className="profileBorder hideProfileBorder" id="martaBorder"></div>
                <IonIcon icon={personCircle} className='profilesUserIcon' />
                <div className="profileNameContainer">
                  <span>Marta</span>
                  <IonIcon icon={pencilSharp} className='profilesEdit' />
                </div>
              </div>
              <div className="profileContainer">
                <div className="profileBorder"></div>
                <IonIcon icon={personCircle} className='profilesUserIcon' />
                <div className="profileNameContainer">
                  <span>Sofia</span>
                  <IonIcon icon={pencilSharp} className='profilesEdit' />
                </div>
              </div>
              <div className="profileContainer">
                <IonIcon icon={addCircleSharp} className='profilesUserIcon' />
                <div className="profileNameContainer">
                  <span>Criar perfil</span>
                </div>
              </div>
            </div>
            <span>Alterar idioma</span>
          </div>
        </IonContent>
    </IonPage>
  );
}

export default Profiles;