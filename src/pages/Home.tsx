import React from 'react';
import { IonContent, IonHeader, IonPage, IonSlides, IonSlide } from '@ionic/react';
import AlergHeader from '../components/AlergHeader';
import AlergHomeGrid from '../components/AlergHomeGrid';
import './Home.css';


let homeProducts: { id: number, img: string, name: string, brand: string }[][] = 
  [
    [ 
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
    ],
    [ 
      {
      id: 5,
      img: "/assets/img/item-5.jpg",
      name: "Placas Lasanha",
      brand: "Milaneza" 
      },
      {
        id: 6,
        img: "/assets/img/item-6.jpg",
        name: "Bolo arroz",
        brand: "Marca"
      },
      {
        id: 7,
        img: "/assets/img/item-7.jpg",
        name: "Brownie Mix",
        brand: "Shine"
      },
      {
        id: 8,
        img: "/assets/img/item-8.jpg",
        name: "Esparguete",
        brand: "Rummo"
      } 
    ],
    [ 
      {
      id: 9,
      img: "/assets/img/item-9.jpg",
      name: "Iogurtes Morango",
      brand: "Danone"
      },
      {
        id: 10,
        img: "/assets/img/item-10.jpg",
        name: "Iogurtes Morango",
        brand: "Danone"
      },
      {
        id: 11,
        img: "/assets/img/item-11.jpg",
        name: "Iogurtes Manga",
        brand: "Nutregi"
      },
      {
        id: 12,
        img: "/assets/img/item-12.jpg",
        name: "Iogurtes",
        brand: "Mimosa"
      }
    ]
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
                <AlergHomeGrid productSlide={homeProducts[0]}></AlergHomeGrid>
              </IonSlide>
              <IonSlide>
                <AlergHomeGrid productSlide={homeProducts[1]}></AlergHomeGrid>
              </IonSlide>
              <IonSlide>
                <AlergHomeGrid productSlide={homeProducts[2]}></AlergHomeGrid>
              </IonSlide>
            </IonSlides>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
