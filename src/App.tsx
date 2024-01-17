import "./App.css";

//import ReactGA from "react-ga";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import QuestionCard from "src/pages/questionCard/QuestionCard";

import FindPw from "./pages/findPw/FindPw";
import Login from "./pages/login/Login";
import MainPage from "./pages/mainPage/MainPage";
import MakeCard from "./pages/makeCard/MakeCard";
import MakeCardInfo from "./pages/makeCardInfo/MakeCardInfo";
import Mypage from "./pages/mypage/Mypage";
import ResultCard from "./pages/resultCard/ResultCard";
import Signup from "./pages/signup/SignUp";
import Layout from "./template/layout/Layout";

//const gaTrackingId = process.env.REACT_APP_GA_TRACKING_ID || "";
//ReactGA.initialize(gaTrackingId, { debug: true });
//ReactGA.pageview(window.location.pathname);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path={"/"} element={<MainPage />} />
      <Route path={"/login"} element={<Login />} />
      <Route path={"/signup"} element={<Signup />} />
      <Route path={"/mypage"} element={<Mypage />} />
      <Route path={"/findpw"} element={<FindPw />} />
      <Route path={"/questioncard"} element={<QuestionCard />} />
      <Route path={"/makecard"} element={<MakeCard />} />
      <Route path={"/makecardinfo"} element={<MakeCardInfo />} />
      <Route path={"/resultcard"} element={<ResultCard />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
