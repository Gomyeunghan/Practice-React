import "./index.css";
import CardList from "./pages/CardList";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import data from "./data/data";

const container = document.getElementById("root");

if (!container) throw new Error("문서에 루트가 존재하지 않습니다.");

createRoot(container).render(
  <StrictMode>
    <CardList data={data}></CardList>
  </StrictMode>
);
