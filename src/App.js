import "./App.css";
import Header from "./Components/Header";
import Foote from "./Components/Foote";
import VideoContainer from "./Components/VideoContainer";
import ObjectifCarsousel from "./Components/nav/ObjectifCarsousel";
import SceneCarsousel from "./Components/nav/SceneCarsousel";
import Duree from "./Components/nav/Duree";
import { useDispatch, useSelector } from "react-redux";
function App() {
  const isVisible = useSelector((state) => state.pageReducer.setObject);
  const isSceneVisible = useSelector((state) => state.pageReducer.setScene);
  const isDurationVisible = useSelector((state) => state.pageReducer.timer);
  return (
    <div className="App">
      <div className="container">
        <Header />
        {/* // lazem hedhom yethatou fi div    */}
        <VideoContainer />
        <div>{isVisible ? <ObjectifCarsousel /> : null}</div>
        <div>{isSceneVisible ? <SceneCarsousel /> : null}</div>
        <div>{isDurationVisible ? <Duree /> : null}</div>
        <Foote />
      </div>
    </div>
  );
}

export default App;
