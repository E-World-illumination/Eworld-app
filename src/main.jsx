import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import "./index.css";

import App from "./App.jsx";

const loadKakaoMapScript = () => {
  const script = document.createElement("script");
  script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.KAKAO_MAP_API_KEY}`;
  script.async = true;
  document.head.appendChild(script);
};

loadKakaoMapScript();

createRoot(document.getElementById("root")).render(
  /*<StrictMode>
  </StrictMode>,*/
  <App />,
);
