import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import AlergHeader from '../components/AlergHeader';
import { personCircleOutline } from 'ionicons/icons';
import './Favorites.css';


function showSearchDiv () {
  let element = document.getElementById('searchDiv');

  if (element) {
    element.classList.toggle('showcontent');
  }

  return;
}

const Favorites: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <AlergHeader 
          headerLeft={""} 
          headerTitle={"Listas de favoritos"} 
          headerRight={"headerUser"} />
      </IonHeader>
      <IonContent fullscreen className="content">
        {/* <button type="button" className="collapsible" onClick={showSearchDiv}>Open Collapsible</button>
        <div className="hidecontent" id="searchDiv">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div> */}
      </IonContent>
    </IonPage>
  );
};

export default Favorites;