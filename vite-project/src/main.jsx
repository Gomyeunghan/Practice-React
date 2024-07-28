import { createRoot } from "react-dom/client";
import "./index.css";
import Weather from "./Weather.jsx";

function WeatherList() {
  return (
    <figure className="WeatherList">
      <Weather />
      <Weather status="FineDust" />
      <Weather status="lightning" />
      <Weather status="rainy" />
      <Weather status="sunny" />
    </figure>
  );
}

const container = document.getElementById("root");

createRoot(container).render(<WeatherList></WeatherList>);
