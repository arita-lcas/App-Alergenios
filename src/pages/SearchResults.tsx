import React from 'react';
import { IonContent, IonHeader, IonPage, IonSpinner } from '@ionic/react';
import AlergHeader from '../components/AlergHeader';
import AlergProductCard from '../components/AlergProductCard';
import './SearchResults.css';


// function sleep(ms : number) { return new Promise(resolve => setTimeout(resolve, ms)); }


async function loadData() {
//   await sleep(500);
  let response = await fetch(process.env.PUBLIC_URL + 'data/products.json' ,{
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


class SearchResults extends React.Component {

    state = {
        searchResultsProducts: []
      }
      
      componentDidMount () {
        loadData().then((loadDataResponse) => {
          this.setState({searchResultsProducts: loadDataResponse})
        }).catch((err) => {
          console.log(err.statusText);
        });
      }
    
      render () {
        return this.state.searchResultsProducts.length === 0  ?  this.renderInitial() : this.renderFinal();
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
                    headerLeft={"headerReturn"} 
                    headerTitle={"headerSearch"} 
                    headerRight={""} />
                </IonHeader>
                <IonContent fullscreen className="content">
                    <div className="searchResultsWrapper">
                        <AlergProductCard product={this.state.searchResultsProducts[0]} />
                        <AlergProductCard product={this.state.searchResultsProducts[1]} />
                        <AlergProductCard product={this.state.searchResultsProducts[2]} />
                    </div>
                </IonContent>
            </IonPage>
        );
    }
    
}

export default SearchResults;