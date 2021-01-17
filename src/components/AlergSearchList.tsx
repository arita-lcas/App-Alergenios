import { carSharp } from 'ionicons/icons';
import React from 'react';
import './AlergSearchList.css';

const listArray = [
    "Açúcar, mel e doces", 
    "Alimentação infantil",
    "Arroz, massa e farinha",
    "Azeite, óleo e vinagre",
    "Barras e cereais",
    "Batatas fritas e snacks",
    "Bebidas",
    "Bolachas e bolos",
    "Charcutaria",
    "Congelados",
    "Conservas, salsichas e legumes",
    "Doçaria e chocolates",
    "Feijão, grão e polpa de tomate",
    "Molho, especiarias e sal",
    "Laticínios",
    "Padaria e pastelaria",
    "Sobremesas",
    "Sopas e cremes",
    "Takeaway"
  ];

  const subTitleArray = [ [
    "Leite",
    "Ovos",
    "Queijo"
    ],
    [
    "Arroz",
    "Massa"
  ] ];

  

  function showSearchDiv (event: any) {
    
    if (event && event.currentTarget && event.currentTarget.id) {
      const elementId = event.currentTarget.id.split('#')[1];

      let element1 = document.getElementById('searchDiv#'+elementId);
      let element2 = document.getElementById('listCard#'+elementId);
      let element3 = document.getElementById('listCardTitle#'+elementId);
    
      if (element1 && element2 && element3) {
        element1.classList.toggle('showListContent');
        element2.classList.toggle('listCardActive');
        element3.classList.toggle('listCardTitleActive');
      }
    }

    return;
  }

  // let i;
  // for (i = 0; i < subTitleArray.length; i++) {

  // }



const AlergSearchList: React.FC = () => {
    return (
        <div className="searchList">
          {listArray.map( (listTitle, index) => {
            return (
            <div>
              <div className="listCard" id={"listCard#"+index} onClick={showSearchDiv}>
                  <span className="listCardTitle" id={"listCardTitle#"+index} key={index}>{listTitle}</span>
              </div>
              <div className="hideListContent" id={"searchDiv#"+index}>
                {subTitleArray.map( (listSubTitle, index2) => {
                  return (
                    <span key={index2}>{listSubTitle}</span>
                  )
                } )}
              </div>
            </div>
            )
          } )}
        </div>
    );
};

export default AlergSearchList;



        