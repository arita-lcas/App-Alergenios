import React from 'react';
import { IonContent, IonHeader, IonPage, IonSlides, IonSlide } from '@ionic/react';
import AlergHeader from '../components/AlergHeader';
import AlergHomeGrid from '../components/AlergHomeGrid';
import './Home.css';


let homeProducts: { id: number, img: string, name: string, brand: string }[] = [
  {
    id: 1,
    img: "/assets/img/item-1.jpg",
    name: "Yofu Soja Natural",
    brand: "Alpro"
  },
  {
    id: 2,
    img: "/assets/img/item-2.jpg",
    name: "Chocolate de Leite",
    brand: "Toblerone"
  }, 
  {
    id: 3,
    img: "/assets/img/item-3.jpg",
    name: "Bolachas de Laranja",
    brand: "Gullón"
  }, 
  {
    id: 4,
    img: "/assets/img/item-4.jpg",
    name: "Bolachas Sharkies",
    brand: "Gullón"
  }
];


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
          <h1 className="alergTitle">Sugestões</h1>
          <div className="homeSlidesContainer">
            <IonSlides pager={true} className="homeSlidesContainer">
              <IonSlide>
                <AlergHomeGrid product={homeProducts}></AlergHomeGrid>
              </IonSlide>
              <IonSlide>
                <AlergHomeGrid product={homeProducts}></AlergHomeGrid>
              </IonSlide>
              <IonSlide>
                <AlergHomeGrid product={homeProducts}></AlergHomeGrid>
              </IonSlide>
            </IonSlides>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
