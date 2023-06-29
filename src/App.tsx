import PageHeader from "./components/PageHeader";
import PageFooter from "./components/PageFooter";
import "./Stylesheet.css";

function App(): JSX.Element {
  return (
    <>
      <div className="top">
        <PageHeader />
      </div>
      <div className="bottom">
        <PageFooter />
      </div>
    </>
  );
}

export default App;
