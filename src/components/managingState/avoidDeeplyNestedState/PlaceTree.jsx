const PlaceTree = ({ id, placesById,parentId, onComplete }) => {
  const place = placesById[id];
  const childIds = place.childIds;

  // const childPlaces = place.childPlaces;

  return (
    <li>
      {place.title} <button onClick={()=>onComplete(parentId,id)}>Complete</button>
      {childIds.length > 0 && (
        <ol>
          {childIds.map((id) => (
            <PlaceTree key={id} id={id} placesById={placesById} parentId={parentId} onComplete={onComplete}></PlaceTree>
          ))}
        </ol>
      )}
    </li>
  );
};

export default PlaceTree;
