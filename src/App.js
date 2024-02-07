import React from "react";
import MainRoutes from "./routes/MainRoutes";
import Panel from "./NavigatePanel/Panel";

const App = () => {
  return (
    <div>
      <Panel />
      <MainRoutes />
    </div>
  );
};

export default App;
