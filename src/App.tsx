import "./App.css";

//import { MyProvider } from './MyContext.tsx';
//import ReactGA from "react-ga";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
//import QuestionCard from "src/pages/questionCard/QuestionCard";
import P1 from "src/pages/p1/P1";
import P2 from "src/pages/p2/P2";
import P3 from "src/pages/p3/P3";
import Q1 from "src/pages/q1/Q1";
import Q2 from "src/pages/q2/Q2";
import Q3 from "src/pages/q3/Q3";
import Q4 from "src/pages/q4/Q4";
import Q5 from "src/pages/q5/Q5";
import Q6 from "src/pages/q6/Q6";
import Result from "src/pages/result/Result";
import Result2 from "src/pages/result2/Result2";
import Result3 from "src/pages/result3/Result3";
import Result4 from "src/pages/result4/Result4";
import Result5 from "src/pages/result5/Result5";
import Result6 from "src/pages/result6/Result6";
import Result7 from "src/pages/result7/Result7";

import Layout from "./template/layout/Layout";

//const gaTrackingId = process.env.REACT_APP_GA_TRACKING_ID || "";
//ReactGA.initialize(gaTrackingId, { debug: true });
//ReactGA.pageview(window.location.pathname);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path={"/"} element={<P1 />} />
      <Route path={"/p2"} element={<P2 />} />
      <Route path={"/p3"} element={<P3 />} />
      <Route path={"/q1"} element={<Q1 />} />
      <Route path={"/q2"} element={<Q2 />} />
      <Route path={"/q3"} element={<Q3 />} />
      <Route path={"/q4"} element={<Q4 />} />
      <Route path={"/q5"} element={<Q5 />} />
      <Route path={"/q6"} element={<Q6 />} />
      <Route path={"/result"} element={<Result />} />
      <Route path={"/result2"} element={<Result2 />} />
      <Route path={"/result3"} element={<Result3 />} />
      <Route path={"/result4"} element={<Result4 />} />
      <Route path={"/result5"} element={<Result5 />} />
      <Route path={"/result6"} element={<Result6 />} />
      <Route path={"/result7"} element={<Result7 />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
