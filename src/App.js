import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/Header";
import { useContext } from "react";
import { DataContext } from "./context/store";
import Board from "./components/Board";
import Button from "./components/Button";

const App = () => {
  const { store } = useContext(DataContext);
  return (
    <div>
      <Header />
      <div className="container">
        {store.listIds.map((id) => {
          const data = store.lists[id];
          return <Board key={id} data={data} />;
        })}
        <Button list />
      </div>
    </div>
  );
};

export default App;
