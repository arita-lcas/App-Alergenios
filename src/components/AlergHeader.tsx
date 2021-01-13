import React from 'react';
import { IonToolbar, IonTitle, IonIcon, IonSearchbar } from '@ionic/react';
import { personCircleOutline, arrowBackOutline, pencilOutline, searchOutline } from 'ionicons/icons';
import './AlergHeader.css';


const AlergHeader: React.FC<{ headerLeft: unknown; headerTitle: string; headerRight: string }> = props => {
    return (
        <IonToolbar className="headerToolbar">
          <div className="headerGridContainer">
            
            <div className="headerGridCol">
              {props.headerLeft === "headerReturn"
                ? <div>
                    <IonIcon icon={arrowBackOutline} className='headerUserIcon' />
                  </div>
                : <div></div>
              }
            </div>

            <div className="headerGridCol">
              {props.headerTitle === "headerSearch"
                ? <div className="headerSearch">
                    <IonSearchbar className="headerSearchbar" placeholder=""></IonSearchbar>
                    <hr className="searchLine"></hr>
                  </div>
                : <div>
                    <IonTitle className="headerTitle">{props.headerTitle}</IonTitle>
                  </div>
              }
            </div>

            <div className="headerGridCol"> 
              {props.headerRight === "headerUser" 
                ? <div >
                    <IonIcon icon={personCircleOutline} className='headerUserIcon' />
                    <br />
                    <span className="headerUserText">Marta</span>
                  </div>
                : <div> 
                  {props.headerRight === "headerEdit" 
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
};

export default AlergHeader;




/* <IonIcon icon={personCircleOutline} className='headerUserIcon' />
<br />
<span className="headerUserText">Marta</span> */