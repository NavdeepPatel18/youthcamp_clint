import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/index";
import Page404 from "./pages/404";
import AboutUs from "./pages/aboutUs";
import Deposit from "./pages/deposit";
import DepositReceipt from "./pages/depositReceipt";
import FullPayment from "./pages/fullPayment";
// import Navbar from "./pages/navbarAfterLogin";
import OnlinePaymentModal from "./pages/onlinePaymentModal";
import Page12 from "./pages/page12";
import Page13 from "./pages/page13";
import Page14 from "./pages/page14";
import Page15 from "./pages/page15";
import Page16 from "./pages/page16";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import Page7 from "./pages/page7";
import Page8 from "./pages/page8";
import Page9 from "./pages/page9";
import PaymentMethod from "./pages/paymentMethod";
import PaymentReciept from "./pages/paymentReciept";
import ThankyouPage from "./pages/thankyouPage";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Home" component={Home}></Route>
        <Route path="/Page404" component={Page404}></Route>
        <Route path="/AboutUs" component={AboutUs}></Route>
        <Route path="/Deposit" component={Deposit}></Route>
        <Route path="/DepositReceipt" component={DepositReceipt}></Route>
        <Route path="/FullPayment" component={FullPayment}></Route>
        <Route
          path="/OnlinePaymentModal"
          component={OnlinePaymentModal}
        ></Route>
        <Route path="/Page12" component={Page12}></Route>
        <Route path="/Page13" component={Page13}></Route>
        <Route path="/Page14" component={Page14}></Route>
        <Route path="/Page15" component={Page15}></Route>
        <Route path="/Page16" component={Page16}></Route>
        <Route path="/Page2" component={Page2}></Route>
        <Route path="/Page3" component={Page3}></Route>
        <Route path="/Page7" component={Page7}></Route>
        <Route path="/Page8" component={Page8}></Route>
        <Route path="/Page9" component={Page9}></Route>
        <Route path="/PaymentMethod" component={PaymentMethod}></Route>
        <Route path="/PaymentReciept" component={PaymentReciept}></Route>
        <Route path="/ThankyouPage" component={ThankyouPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
