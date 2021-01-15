import React from 'react';
import { IonContent, IonHeader, IonPage, IonSlides, IonSlide, IonSpinner } from '@ionic/react';
import AlergHeader from '../components/AlergHeader';
import AlergHomeGrid from '../components/AlergHomeGrid';
import './Home.css';

function sleep(ms : number) { return new Promise(resolve => setTimeout(resolve, ms)); }


async function loadData() {
  await sleep(500);
  let response = await fetch(process.env.PUBLIC_URL + 'data/sugestions.json' ,{
        headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
  });
  if (response.status != 200) {
    throw response;
  } else {
    return await response.json();
  }
}

class Home extends React.Component {

  state = {
    homeProducts: []
  }
  
  componentDidMount () {
    loadData().then((loadDataResponse) => {
      this.setState({homeProducts: loadDataResponse})
    }).catch((err) => {
      console.log(err.statusText);
    });
  }

  render () {
    return this.state.homeProducts.length === 0  ?  this.renderInitial() : this.renderFinal();
  }

  renderInitial () {
    return (
      <IonSpinner name="crescent" />
    );
  }

  renderFinal () {
    return (
      <IonPage>
        <IonHeader>
          <AlergHeader 
            headerLeft={""} 
            headerTitle={""} 
            headerRight={"headerUser"} />
        </IonHeader>
        <IonContent slot="fixed" className="content">
          <div className="homeWrapper">
            <h1 className="alergTitle">Sugestões</h1>
            <div className="homeSlidesContainer">
              <IonSlides pager={true} className="homeSlidesContainer">
                <IonSlide>
                  <AlergHomeGrid productSlide={this.state.homeProducts[0]}></AlergHomeGrid>
                </IonSlide>
                <IonSlide>
                  <AlergHomeGrid productSlide={this.state.homeProducts[1]}></AlergHomeGrid>
                </IonSlide>
                <IonSlide>
                  <AlergHomeGrid productSlide={this.state.homeProducts[2]}></AlergHomeGrid>
                </IonSlide>
              </IonSlides>
            </div>
          </div>
        </IonContent>
      </IonPage>
    );
  }

};

export default Home;
