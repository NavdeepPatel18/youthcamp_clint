import { useEffect } from "react";
import $ from "jquery";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./pages/User/index";
import Page404 from "./pages/User/404";
import AboutUs from "./pages/User/aboutUs";
import Deposit from "./pages/User/deposit";
import DepositReceipt from "./pages/User/depositReceipt";
import FullPayment from "./pages/User/fullPayment";
import Navbar from "./pages/User/navbarAfterLogin";
import OnlinePaymentModal from "./pages/User/onlinePaymentModal";
import Page12 from "./pages/User/page12";
import Page13 from "./pages/User/page13";
import Page14 from "./pages/User/page14";
import Page15 from "./pages/User/page15";
import Page16 from "./pages/User/page16";
import Page2 from "./pages/User/page2";
import Page3 from "./pages/User/page3";
import Page7 from "./pages/User/page7";
import Page8 from "./pages/User/page8";
import Page9 from "./pages/User/page9";
import PaymentMethod from "./pages/User/paymentMethod";
import PaymentReciept from "./pages/User/paymentReciept";
import ThankyouPage from "./pages/User/thankyouPage";

//Admin file import

import AdminAboutUs from "./pages/Admin/adminAboutUs";
import AdminAddNew from "./pages/Admin/adminAddNew";
import AdminAddNewBlog from "./pages/Admin/adminAddNewBlog";
import AdminBlog from "./pages/Admin/adminBlog";
import AdminCampDetails from "./pages/Admin/AdminCampDetails";
import AdminContactus from "./pages/Admin/adminContactus";
import AdminDashboard from "./pages/Admin/adminDashboard";
import AdminEditPage from "./pages/Admin/adminEditPage";
import AdminHomepage from "./pages/Admin/adminHomepage";
import NewAdminCamp from "./pages/Admin/newAdminCamp";

import "./App.css";

// import outscript from "./pages/User/page1.js";

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
        <Route path="/Navbar" component={Navbar}></Route>
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

        {/* //admin page */}

        <Route path="/AdminAboutUs" component={AdminAboutUs}></Route>
        <Route path="/AdminAddNew" component={AdminAddNew}></Route>
        <Route path="/AdminAddNewBlog" component={AdminAddNewBlog}></Route>
        <Route path="/AdminBlog" component={AdminBlog}></Route>
        <Route path="/AdminCampDetails" component={AdminCampDetails}></Route>
        <Route path="/AdminContactus" component={AdminContactus}></Route>
        <Route path="/AdminDashboard" component={AdminDashboard}></Route>
        <Route path="/AdminEditPage" component={AdminEditPage}></Route>
        <Route path="/AdminHomepage" component={AdminHomepage}></Route>
        <Route path="/NewAdminCamp" component={NewAdminCamp}></Route>
      </Switch>
    </Router>
  );
}

export default App;
