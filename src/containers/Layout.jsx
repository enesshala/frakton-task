import MainItem from "../components/MainItem";
import { Route } from "react-router-dom";
import Summary from "../components/pages/Summary";

const Layout = () => {
  return (
    <div>
      <Route path="/summary" exact>
        <Summary />
      </Route>
      <Route path="/" exact>
        <MainItem />
      </Route>
    </div>
  );
};

export default Layout;
