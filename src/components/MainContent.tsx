interface MainContentProps {
  title: string;
  place: string;
  country: string;
  image: string;
  location: string;
  explaination: string;
}

function MainContent({ FavPlaces }: { FavPlaces: MainContentProps[] }): JSX.Element {
  return (
    <>
      {FavPlaces.map((FavPlace, index) => (
        <div key={index}>
          <img src={FavPlace.image} alt={FavPlace.place} />
          <h3>{FavPlace.place}</h3>
          <h5>FavPlaces
            {FavPlace.country}(
            <a href={FavPlace.location}>
              <small>map link</small>
            </a>
            )
          </h5>
          <p>{FavPlace.explaination}</p>
        </div>
      ))}
    </>
  );
}

export default MainContent;
