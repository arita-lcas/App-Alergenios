import React from 'react';
import { IonToolbar, IonTitle, IonIcon, IonSearchbar, IonBackButton } from '@ionic/react';
import { personCircleOutline, pencilOutline } from 'ionicons/icons';
import './AlergHeader.css';
import { withRouter, RouteComponentProps  } from 'react-router-dom';


interface AlergHeaderProps extends RouteComponentProps {
  headerLeft: string,
  headerTitle: string, 
  headerRight: string,
  searchedText: string
}


class AlergHeader extends React.Component<AlergHeaderProps> {

  searchText (event: any) {
    if (event && event.key === "Enter" && event.target && event.target.value) {
      this.props.history.push(`/tab3/searchresults/${event.target.value}`);
    }
  };

  openProfilesPage (event: any) {
    if (event && event.target) {
      this.props.history.push(`/profiles`);
    }
  };
  
  render () {
    return (
      <IonToolbar className="headerToolbar">
        <div className="headerGridContainer">
          
          <div className="headerGridCol">
            {this.props.headerLeft === "headerReturn"
              ? <div>
                  <IonBackButton className="backButton" />
                </div>
              : <div></div>
            }
          </div>

          <div className="headerGridCol">
            {this.props.headerTitle === "headerSearch"
              ? <div className="headerSearch">
                  <IonSearchbar className="headerSearchbar" placeholder="" onKeyPress={this.searchText.bind(this)} value={this.props.searchedText}></IonSearchbar>
                  <hr className="searchLine"></hr>
                </div>
              : <div>
                  <span className="headerTitle">{this.props.headerTitle}</span>
                </div>
            }
          </div>

          <div className="headerGridCol"> 
            {this.props.headerRight === "headerUser" 
              ? <div className="headerUser" onClick={this.openProfilesPage.bind(this)}>
                  <IonIcon icon={personCircleOutline} className='headerUserIcon' />
                  <span className="headerUserText">Marta</span>
                </div>
              : <div> 
                {this.props.headerRight === "headerEdit" 
                  ? <div>
                      <IonIcon icon={pencilOutline} className='headerUserIcon' />
                    </div>
                  : <div></div>
                }
              </div>
            }
          </div>

        </div>
      </IonToolbar>
    );
  }   
}

export default withRouter(AlergHeader);


// <{ headerLeft: unknown; headerTitle: string; headerRight: string }> = props =>



