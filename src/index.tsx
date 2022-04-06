import { StrictMode } from "react";
import { createRoot } from "react-dom/client"; 
import { BrowserRouter as Router } from "react-router-dom";

import AppRouter from "./routes/AppRouter";

const rootElement = document.getElementById("root") as HTMLDivElement;
const root = createRoot(rootElement);

root.render(
  <StrictMode> 
    <Router>
      <AppRouter />
    </Router>
  </StrictMode>
);