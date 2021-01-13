import React from 'react';
import { IonContent, IonHeader, IonPage, IonSlides, IonSlide } from '@ionic/react';
import AlergHeader from '../components/AlergHeader';
import AlergHomeGrid from '../components/AlergHomeGrid';
import './Home.css';


const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <AlergHeader 
          headerLeft={""} 
          headerTitle={""} 
          headerRight={"headerUser"} />
      </IonHeader>
      <IonContent slot="fixed" className="homeContent">
        <div className="homeWrapper">
          <h1>Sugestões</h1>
          <div className="homeSlidesContainer">
            <IonSlides pager={true} className="homeSlidesContainer">
              <IonSlide>
                <AlergHomeGrid></AlergHomeGrid>
              </IonSlide>
              <IonSlide>
                <AlergHomeGrid></AlergHomeGrid>
              </IonSlide>
              <IonSlide>
                <AlergHomeGrid></AlergHomeGrid>
              </IonSlide>
            </IonSlides>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
