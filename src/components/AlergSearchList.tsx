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

  const subTitleArray = [
    "Leite",
    "Ovos",
    "Queijo"
  ];

  function showSearchDiv () {
    let element1 = document.getElementById('searchDiv');
    let element2 = document.getElementById('listCard');
    let element3 = document.getElementById('listCardTitle');
  
    if (element1 && element2 && element3) {
      element1.classList.toggle('showListContent');
      element2.classList.toggle('listCardActive');
      element3.classList.toggle('listCardTitleActive');
    }
  
    return;
  }

const AlergSearchList: React.FC = () => {
    return (
        <div className="searchList">
          {listArray.map( (listTitle, index) => {
            return (
            <div>
              <div className="listCard" id="listCard" onClick={showSearchDiv}>
                  <span className="listCardTitle" id="listCardTitle" key={index}>{listTitle}</span>
              </div>
              <div className="hideListContent" id="searchDiv">
                {subTitleArray.map( (listSubTitle, index) => {
                  return (
                    <span key={index}>{listSubTitle}</span>
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



        