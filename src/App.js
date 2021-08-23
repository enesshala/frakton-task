import Layout from "./containers/Layout";
import { ItemProvider } from "./context/ItemContext";

function App() {
  return (
    <>
      <ItemProvider>
        <Layout />
      </ItemProvider>
    </>
  );
}

export default App;
