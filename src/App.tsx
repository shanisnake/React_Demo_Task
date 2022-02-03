import React, { useEffect } from "react";
import "./App.css";
import PortFolioDashboard from "./component/PortFolioDashboard";
import { useActions } from "./hooks/use-actions";

function App() {
  const { mutualFundAcction, exchangeFundAcction } = useActions();

  useEffect(() => {
    mutualFundAcction();
    exchangeFundAcction();
  }, []);
  return (
    <div className="App">
      Portfolio
      <PortFolioDashboard />
    </div>
  );
}

export default App;
