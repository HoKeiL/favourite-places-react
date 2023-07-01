import PageHeader from "./components/PageHeader";
import PageFooter from "./components/PageFooter";
import MainContent from "./components/MainContent";
import "./Stylesheet.css";

const FavPlacesArray = [
  {
    title: "My favourite capital city",
    place: "London",
    country: "U.K.",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG9uZG9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    location:
      "https://www.google.com/maps/place/London/@51.528308,-0.3817765,10z/data=!3m1!4b1!4m6!3m5!1s0x47d8a00baf21de75:0x52963a5addd52a99!8m2!3d51.5072178!4d-0.1275862!16zL20vMDRqcGw?hl=en-GB&entry=ttu",
    explaination: "London is my favouite because it is vibrant and diverse.",
  },
  {
    title: "My home town",
    place: "Hong Kong",
    country: "China",
    image:
      "https://images.unsplash.com/photo-1577871598838-a543ee47cd79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvbmclMjBrb25nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    location:
      "https://www.juliusbaer.com/fileadmin/_processed_/e/6/csm_Hong_Kong_bd24201bc7.jpg",
    explaination:
      "I was born in Hong Kong and lived there through my childhood, the food the scenery and the people are what makes Hong Kong great.",
  },
  {
    title: "My home town",
    place: "Lisbon",
    country: "Portugal",
    image:
      "./img/lisbon",
    location:
      "https://www.google.com/maps/place/Lisbon,+Portugal/@38.7436057,-9.2302432,12z/data=!3m1!4b1!4m6!3m5!1s0xd19331a61e4f33b:0x400ebbde49036d0!8m2!3d38.7222524!4d-9.1393366!16zL20vMDRsbGI?entry=ttu",
    explaination:
      "Lisbon is one of my favourite city I have visited, I love the weather there, the food and the scenery!",
  }
];

function App(): JSX.Element {
  return (
    <>
      <div className="top">
        <PageHeader />
      </div>
      <div className="main">
        <MainContent FavPlaces={FavPlacesArray} />
      </div>
      <div className="bottom">
        <PageFooter />
      </div>
    </>
  );
}

export default App;
