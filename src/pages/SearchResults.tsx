import React from 'react';
import { IonContent, IonHeader, IonPage, IonSpinner } from '@ionic/react';
import AlergHeader from '../components/AlergHeader';
import AlergProductCard from '../components/AlergProductCard';
import { RouteComponentProps } from "react-router-dom";
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

interface SearchPageProps extends RouteComponentProps<{
  searchParams: string;
}> {}

class SearchResults extends React.Component<SearchPageProps> {

  state = {
    searchResultsProducts: []
  }
  
  componentDidMount () {
    loadData().then((loadDataResponse) => {
      let filteredResponse = loadDataResponse.filter((prod: any) => prod.name.toUpperCase().includes(this.props.match.params.searchParams.toUpperCase()));
      this.setState({searchResultsProducts: filteredResponse})
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
                    {this.state.searchResultsProducts.map( (productInfo) => {
                      return (
                        <AlergProductCard product={productInfo} />
                      ) })}
                  </div>
              </IonContent>
          </IonPage>
      );
  }
    
}

export default SearchResults;