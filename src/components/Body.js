import React, { useEffect, useState } from "react";
import RestrauntCard,{PromotedCard} from "./RestrauntCard";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const withLabel = PromotedCard(RestrauntCard);

  useEffect(() => {
    console.log("useEffecct called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
console.log(json);
    //console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterData(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const filterHighRatedRestaurants = () => {
    const filteredRes = listOfRestaurants.filter(
      (res) => res.info.avgRating > 4.2
    );
    console.log(filteredRes);
    setFilterData(filteredRes);
  };

  const handleSearch = () => {
    const filteredList = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log(filteredList);
    setFilterData(filteredList);
  };

  const onlinestatus = useOnlineStatus();
  if (onlinestatus === false)
    return <h1>Please check your Internet, you are offline.</h1>;

  if (listOfRestaurants.length === 0) {
    return <h1>Loading..............</h1>;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="p-4 m-4">
        <input
          type="text"
          className="border border-double border-black rounded-xl m-2 p-2"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button className="px-3 py-2 bg-green-300 m-2 rounded-xl" onClick={handleSearch}>Search</button>
       
        <button className="px-3 py-2 bg-green-300 m-4 rounded-xl" onClick={filterHighRatedRestaurants}>
          High Rated Restaurants
        </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filterData.map((restaurant, index) => (
          // restaurant.info.promoted ? (<PromotedCard resData={restaurant}/>)
         <Link to={"/restraunts/" + restaurant.info.id }> <RestrauntCard  key={restaurant.info.id} resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
