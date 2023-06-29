import { greet } from "./utils/greet";
import PageHeader from "./components/PageHeader";

function App(): JSX.Element {
  return (
    <>
      <h1>{greet("World")}</h1>
      <PageHeader />
    </>
  );
}

export default App;
