import { CDN_URL} from '../utils/constants';
//Res-card Component
const Restrauntcard = (props) => {
    const { resData } = props;

    return (
      <div className=" m-4 p-4 w-[200px] bg-gray-200 hover:bg-green-300 rounded-lg">
        <img className="rounded-lg" src={CDN_URL + props.resData.info.cloudinaryImageId}/>
        <h3 className='font-bold px-2 py-2 text-xl'>{props.resData.info.name}</h3>
        <h4>{props.resData.info.cuisines.join(", ")}</h4>
        <h5>{props.resData.info.avgRating} stars</h5>
        <h6>{props.resData.info.sla.deliveryTime} minutes </h6>
      </div>
    );
  };

  //Higher Order Components
 export const PromotedCard = (Restrauntcard)=>{
    return (props)=> {
      return (
        <div>
          <label>Promoted</label>
          <Restrauntcard {...props}/>
        </div>
      );
    }
  }
  
  export default Restrauntcard;