import { IMG_CDN_URL } from "../contants";

const RestrauntCard =  ({ 
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
})=> 
{
  return(
        <div className="card">
            <img src={ IMG_CDN_URL+cloudinaryImageId}/>
            <h2>{name}</h2>
            <h2>{cuisines.join(" , ")}</h2>
            <h4>{lastMileTravelString}minutes</h4>

        </div>
    )
}

export default RestrauntCard;
