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

  searched = "";

  state = {
    allProducts: [],
    searchResultsProducts: []
  }

  updateItems() {
    let filteredNames = this.state.allProducts.filter((prod: any) => prod.name.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(this.props.match.params.searchParams.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")));
    let filteredBrands = this.state.allProducts.filter((prod: any) => prod.brand.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(this.props.match.params.searchParams.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")));
    let filteredSubCategories = this.state.allProducts.filter((prod: any) => prod.subcategory.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(this.props.match.params.searchParams.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")));
    let filteredResponse = filteredNames.concat(filteredBrands).concat(filteredSubCategories);

    filteredResponse = filteredResponse.filter((item: never, index: number) => {
      return filteredResponse.indexOf(item) === index;
    });

    this.setState({searchResultsProducts: filteredResponse})
  }
  
  componentDidUpdate () {
    if (this.searched !== this.props.match.params.searchParams) {
      this.searched = this.props.match.params.searchParams;
      this.setState({searchResultsProducts: []});
      
      this.updateItems();
    }
  }

  componentDidMount () {
    this.searched = this.props.match.params.searchParams;
    
    loadData().then((loadDataResponse) => {
      this.setState({allProducts: loadDataResponse})
      this.updateItems();
    }).catch((err) => {
      console.log(err.statusText);
    });
  }

  render () {
    return this.state.searchResultsProducts.length === 0  ?  this.renderInitial() : this.renderFinal();
  }

  renderInitial () {
    return (
      <IonPage>
        <IonHeader>
          <AlergHeader 
          headerLeft={"headerReturn"} 
          headerTitle={"headerSearch"} 
          headerRight={""}
          searchedText={this.searched} />
        </IonHeader>
        <IonContent fullscreen className="content">
          <div className ="noResults">
            <span>Não foram encontrados resultados.</span>
          </div>
        </IonContent>
      </IonPage>
    );
  }


  renderFinal () {
      return (
          <IonPage>
              <IonHeader>
                  <AlergHeader 
                  headerLeft={"headerReturn"} 
                  headerTitle={"headerSearch"} 
                  headerRight={""}
                  searchedText={this.searched} />
              </IonHeader>
              <IonContent fullscreen className="content">
                  <div className="searchResultsWrapper">
                    {this.state.searchResultsProducts.map( (productInfo, idx) => {
                      return (
                        <AlergProductCard key={idx} product={productInfo} />
                      ) })}
                  </div>
              </IonContent>
          </IonPage>
      );
  }
    
}

export default SearchResults;