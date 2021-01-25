import { carSharp } from 'ionicons/icons';
import React from 'react';
import './AlergSearchList.css';


const listArray = [
  {
    title: "Açúcar, mel e doces",
    subTitle: ["Açúcar", "Adoçante", "Cremes para barrar", "Doces e compotas", "Mel"]
  }, 
  {
    title: "Alimentação infantil",
    subTitle: ["Alimentos lácteos", "Frutas e refeições", "Leites infantis", "Papas infantis", "Snacks e bolachinhas"]
  }, 
  {
    title: "Arroz, massa e farinha",
    subTitle: ["Arroz", "Farinha", "Massa"]
  }, 
  {
    title: "Azeite, óleo e vinagre",
    subTitle: ["Azeite", "Óleo", "Vinagre"]
  }, 
  {
    title: "Barras e cereais",
    subTitle: ["Barras de cereais", "Cereais"]
  }, 
  {
    title: "Batatas fritas e snacks",
    subTitle: ["Batatas fritas", "Frutos secos", "Pipocas", "Snacks"]
  }, 
  {
    title: "Bebidas",
    subTitle: ["Achocolatados", "Água", "Bebidas espirituosas e licores", "Café", "Cervejas e sidras", "Chá", "Champanhe e espumante", "Gin", "Refrigerantes", "Sumos e néctares", "Vinho", "Whisky"]
  }, 
  {
    title: "Bolachas e bolos",
    subTitle: ["Bolachas e biscoitos", "Bolos"]
  }, 
  {
    title: "Charcutaria",
    subTitle: ["Alheira, farinheira e morcela", "Bacon", "Chouriço e linguiça", "Chourição", "Fiambre", "Mortadela", "Paio e salpicão", "Presunto", "Salmão e outros fumados", "Salsichas"]
  }, 
  {
    title: "Congelados",
    subTitle: ["Aperitivos", "Croquetes", "Fruta", "Gelados e sobremesas", "Hambúrgueres e carne", "Marisco", "Peixe", "Pizzas", "Refeições prontas", "Vegetais"]
  }, 
  {
    title: "Conservas, salsichas e legumes",
    subTitle: ["Azeitonas e tremoços", "Cogumelos", "Conservas de peixe", "Conservas de vegetais", "Patês", "Refeições enlatadas", "Salsichas"]
  }, 
  {
    title: "Doçaria e chocolates",
    subTitle: ["Chocolate culinária", "Chocolates", "Rebuçados, gomas e pastilhas"]
  }, 
  {
    title: "Feijão, grão e polpa de tomate",
    subTitle: ["Feijão", "Grão", "Polpa de tomate"]
  }, 
  {
    title: "Molhos, especiarias e sal",
    subTitle: ["Especiarias", "Molhos", "Sal"]
  }, 
  {
    title: "Laticínios",
    subTitle: ["Bebidas vegetais", "Iogurtes", "Leite", "Manteigas e cremes vegetais", "Natas, bechamel e chantilly", "Ovos", "Queijos", "Sobremesas refrigeradas"]
  }, 
  {
    title: "Padaria e pastelaria",
    subTitle: ["Biscoitos", "Bolos", "Broas", "Pão", "Tostas"]
  }, 
  {
    title: "Sobremesas",
    subTitle: ["Gelatinas em pó", "Leite condensado", "Polpas e frutas em calda", "Preparados de bolos/mousses", "Outros (fermento, coco ralado, aromas)"]
  }, 
  {
    title: "Sopas e cremes",
  }, 
  {
    title: "Takeaway",
    subTitle: ["Refeições", "Sobremesas"]
  }
];
  

  function showSearchDiv (event: any) {
    
    if (event && event.currentTarget && event.currentTarget.id) {
      const elementId = event.currentTarget.id.split('#')[1];

      let element1 = document.getElementById('searchDiv#'+elementId);
      let element2 = document.getElementById('listCard#'+elementId);
      let element3 = document.getElementById('listCardTitle#'+elementId);
    
      if (element1 && element2 && element3 && element1.childElementCount > 0) {
        element1.classList.toggle('effect');
        element2.classList.toggle('listCardActive');
        element3.classList.toggle('listCardTitleActive');
      }
    }

    return;
  }


const AlergSearchList: React.FC = () => {
    return (
        <div className="searchList">
          {listArray.map( (objectInfo, index) => {
            return (
            <div key={index}>
              <div className="listCard" id={"listCard#"+index} onClick={showSearchDiv}>
                <span className="listCardTitle" id={"listCardTitle#"+index} key={index}>{objectInfo.title}</span>
              </div>
              <a href={"/searchresults/"} className="listLink"><div className="hideListContent" id={"searchDiv#"+index}>
                {objectInfo.subTitle
                  ? objectInfo.subTitle.map( (listSubTitle, index2) => {
                    return (
                      <span className="listCardSubTitle" key={index2}>• {listSubTitle}</span>
                    )
                  } )
                  : null
                }
              </div></a>
            </div>
            )
          } )}
        </div>
    );
};

export default AlergSearchList;



        