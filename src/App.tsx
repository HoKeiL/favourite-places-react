import { greet } from "./utils/greet";
import PageHeader from "./components/PageHeader";
import "./Stylesheet"
function App(): JSX.Element {
  return (
   
    <div className ="top">
      <h1>{greet("World")}</h1>
      <PageHeader />
    </div>
  
  );
}

export default App;
