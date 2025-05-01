import {useState} from "react";
import { initialTravelPlan } from "./places";
import PlaceTree from "./PlaceTree";


const TravelPlan = () => {

    const [plan,setPlan] = useState(initialTravelPlan);

    const places = plan.childPlaces;

    // console.log(plan);
    


    return (
        <>
        <h2>Places to visit</h2>
        <ol>
            {places.map((place)=>(
                <PlaceTree place={place} key={place.id} />
            ))}
        </ol>
        
        
        </>
    );
};

export default TravelPlan;