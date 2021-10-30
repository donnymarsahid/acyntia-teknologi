import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AddPortfolio from "./pages/AddPortfolio";
import UpdatePortfolio from "./pages/UpdatePortfolio";
import ScrollToTop from "./assets/components/ScrollToTop";
import ContactUs from "./pages/ContactUs";
import Footer from "./assets/components/Footer";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/add-portfolio" component={AddPortfolio} />
          <Route path="/update-portfolio" component={UpdatePortfolio} />
          <Route path="/contactUs" component={ContactUs} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
