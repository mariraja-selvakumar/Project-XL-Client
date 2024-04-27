import React, { useState } from "react";
import CustomTable from "./components/CustomTable";
import CustomFileUpload from "./components/CustomFileUpload";

import "./App.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  return (
    <div className="App">
      <CustomFileUpload setData={setData} setIsLoading={setIsLoading} />
      <CustomTable data={data} isLoading={isLoading} />
    </div>
  );
}

export default App;
