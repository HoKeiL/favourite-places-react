interface MainContentProps {
  title: string;
  place: string;
  country: string;
  image: string;
  location: string;
  explaination: string;
}

function MainContent({
  FavPlaces,
}: {
  FavPlaces: MainContentProps[];
}): JSX.Element {
  return (
    <>
      {FavPlaces.map((FavPlace, index) => (
        <div key={index} className="favPlace">
          <img className="img" src={FavPlace.image} alt={FavPlace.place} />
          <h2 className="h2">{FavPlace.place}</h2>
          <h3 className="h3">
            {FavPlace.country}(
            <a href={FavPlace.location}>
              <small>map link</small>
            </a>
            )
          </h3>
          <p className="p">{FavPlace.explaination}</p>
        </div>
      ))}
    </>
  );
}

export default MainContent;
