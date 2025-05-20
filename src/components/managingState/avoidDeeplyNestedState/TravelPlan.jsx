import {useState} from "react";
// import { initialTravelPlan } from "./places";
import { initialTravelPlan } from "./places-normalized";
import PlaceTree from "./PlaceTree";


const TravelPlan = () => {

    const [plan,setPlan] = useState(initialTravelPlan);

    // const places = plan.childPlaces;

    console.log(plan);

    const root = plan[0];
    const planetIds = root.childIds;


    const handleComplete = (parentId,childId) => {

        const parent = plan[parentId];

        const nextParent = {
            ...parent,
            childIds: parent.childIds.filter((id)=>id !== childId),
        };

        setPlan({
            ...plan,
            [parentId] : nextParent,
        });

    };
    


    return (
        <>
        <h2>Places to visit</h2>
        
        {/* <ol>
            {places.map((place)=>(
                <PlaceTree place={place} key={place.id} />
            ))}
        </ol> */}

        <ol>
            {planetIds.map((placeId)=>(
                <PlaceTree key={placeId} id={placeId} placesById={plan} onComplete={handleComplete} parentId={0}/>
            ))}
        </ol>
        
        
        </>
    );
};

export default TravelPlan;