import "regenerator-runtime";
import "./script/component/app-bar.js";
import "./script/component/footer-bar.js";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/style.css";
import main from "./script/view/main.js";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);
dom.watch();
document.addEventListener("DOMContentLoaded", main);