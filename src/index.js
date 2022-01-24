import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ResultCotextProvider from "./contexts/ResultCotextProvider";
import "./global.css";

ReactDOM.render(
  <ResultCotextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ResultCotextProvider>,
  document.getElementById("root")
);
