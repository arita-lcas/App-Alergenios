import React from 'react';
import { IonPage, IonHeader, IonContent, IonIcon } from '@ionic/react';
import { personCircle, pencilSharp, addCircleSharp } from 'ionicons/icons';
import AlergHeader from '../components/AlergHeader';
import './Profiles.css';


//  function activateMarta (event:any) {

//    if (event && event.target) {
//     debugger;
//     let getMartaBorder = document.getElementById('martaBorder');
//     let getSofiaBorder = document.getElementById('sofiaBorder');
//     let getUsername = document.getElementById('headerUsername');
    
//     if (getMartaBorder && getSofiaBorder && getUsername) {
//       getMartaBorder.classList.toggle('hideProfileBorder');
//       getSofiaBorder.classList.toggle('hideProfileBorder');
//       getUsername.innerHTML = 'Marta';
//     }
//    }

//    return;
//  }

function activateMarta (event:any, teste: any) {

  if (event && event.target) {
   let getMartaBorder = document.getElementById('martaBorder');
   let getSofiaBorder = document.getElementById('sofiaBorder');
   let getUsername = document.getElementById('headerUsername');
   
   if (getMartaBorder && getSofiaBorder && getUsername) {
     getMartaBorder.classList.toggle('hideProfileBorder');
     getSofiaBorder.classList.toggle('hideProfileBorder');

      if (teste == 'marta') {
        getUsername.innerHTML = 'Marta';  
      } else {
        getUsername.innerHTML = 'Sofia'; 
      }
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
              <div className="profileContainer" onClick={(event) => activateMarta(event,'marta')}>
                <div className="profileBorder hideProfileBorder" id="martaBorder"></div>
                <IonIcon icon={personCircle} className='profilesUserIcon' />
                <div className="profileNameContainer">
                  <span>Marta</span>
                  <IonIcon icon={pencilSharp} className='profilesEdit' />
                </div>
              </div>
              <div className="profileContainer" onClick={(event) => activateMarta(event,'sofia')}>
                <div className="profileBorder" id="sofiaBorder"></div>
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