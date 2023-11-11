import QScreen1 from "./modules/qscreen1";
import QScreen2 from "./modules/qscreen2";
import QScreen3 from "./modules/qscreen3";
import QScreen4 from "./modules/qscreen4";
import QScreenLoading from "./modules/qscreenloading";
import Quiz from "./modules/quiz";
function App() {
  return (
    <div className="App">
      <Quiz>
        <QScreen1></QScreen1>
        <QScreen2></QScreen2>
        <QScreen3></QScreen3>
        <QScreen4></QScreen4>
        <QScreenLoading></QScreenLoading>
      </Quiz>
    </div>
  );
}

export default App;
