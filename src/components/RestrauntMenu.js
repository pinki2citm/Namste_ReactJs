import { useEffect, useState } from "react";

const RestrauntMenu = () => {

  useEffect(() => {
    fetchMenu();
  }, []);
  

  const fetchMenu = async () => {
   
    const data = await fetch(`https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=831065&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`);
    // const data = await fetch("https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=72605");
    const json = await data.json();
    //.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
    console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card);
   // console.log(json);
  };
  return (
    <div className="menu">
      <h1>Restraunt Name</h1>
      <h1>Menu</h1>
      <ul>
        <li>Pizza</li>
        <li>Burger</li>
        <li>MAsala Dosa</li>
      </ul>
    </div>
  );
};
export default RestrauntMenu;
