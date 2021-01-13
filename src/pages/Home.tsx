import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonSlides, IonSlide, IonRow, IonCol, IonGrid } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import AlergHeader from '../components/AlergHeader';
import { personCircleOutline } from 'ionicons/icons';
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
          <IonSlides pager className="homeSlidesContainer">
            <IonSlide>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <div className="homeProducts"></div>
                  </IonCol>
                  <IonCol>
                    <div className="homeProducts"></div>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <div className="homeProducts"></div>
                  </IonCol>
                  <IonCol>
                    <div className="homeProducts"></div>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonSlide>


            <IonSlide>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <div className="homeProducts"></div>
                  </IonCol>
                  <IonCol>
                    <div className="homeProducts"></div>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <div className="homeProducts"></div>
                  </IonCol>
                  <IonCol>
                    <div className="homeProducts"></div>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonSlide>


            <IonSlide>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <div className="homeProducts"></div>
                  </IonCol>
                  <IonCol>
                    <div className="homeProducts"></div>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <div className="homeProducts"></div>
                  </IonCol>
                  <IonCol>
                    <div className="homeProducts"></div>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonSlide>
          </IonSlides>
        </div>
        
      </IonContent>
    </IonPage>
  );
};

export default Home;
