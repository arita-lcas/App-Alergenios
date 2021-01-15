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

const AlergSearchList: React.FC = () => {
    return (
        <div className="searchList">
          {listArray.map( (listTitle, index) => {
            return (
            <div className="listCard">
                <span className="listCardTitle" key={index}>{listTitle}</span>
            </div>
          )} )}
        </div>
    );
};

export default AlergSearchList;



        