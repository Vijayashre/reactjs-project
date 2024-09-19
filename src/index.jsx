import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Fragment } from "react";
//import FetchData from "./FetchData";
import DataStatus from "./DataStatus";
//import UseRefernce from "./UseRefernce";
//import Timer from "./Timer";
import FetchApiSearch from "./FetchApiSearch";


const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint)
.render(
<Fragment>

<FetchApiSearch />

</Fragment>

);
