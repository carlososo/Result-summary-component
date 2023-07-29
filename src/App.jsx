import { useEffect, useState } from "react";
import data from "../src/helpers/data.json";

import { ResultComponent, SummaryComponent } from "./components";

function App() {
  const [items, setItems] = useState([]);
  const [percentage, setPercentage] = useState(0);

  const getItems = () => {
    setItems(data);
    setPercentage(
      Math.floor(data.reduce((acc, item) => acc + item.score, 0) / data.length)
    );
  };

  useEffect(() => {
    getItems();
  }, []);
  return (
    <div className="main-container">
      <ResultComponent percentage={percentage} />
      <SummaryComponent items={items} />
    </div>
  );
}

export default App;
