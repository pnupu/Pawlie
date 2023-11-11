import Phone from "./modules/phone";
import PhoneNav from "./modules/phonenav";
import CampaignScreen from "./modules/campaignscreen";

import QScreen1 from "./modules/qscreen1";
import QScreen2 from "./modules/qscreen2";
import QScreen3 from "./modules/qscreen3";
import QScreen4 from "./modules/qscreen4";
import QScreen5 from "./modules/qscreen5";
import QScreen6 from "./modules/qscreen6";
import QScreen7 from "./modules/qscreen7";
import QScreen8 from "./modules/qscreen8";
import QScreenChallenge from "./modules/qscreenchallenge";
import QScreenLoading from "./modules/qscreenloading";
import QScreenResults from "./modules/qscreenresults";
import Quiz from "./modules/quiz";
function App() {
  return (
    <div className="App">
      <Phone>
        <div id="main-content" className="grow flex flex-col overflow-y-auto">
          <CampaignScreen />
        </div>
        <PhoneNav />
      </Phone>
      {/* <Quiz>
        <QScreen1></QScreen1>
        <QScreen2></QScreen2>
        <QScreen3></QScreen3>
        <QScreen4></QScreen4>
        <QScreenLoading></QScreenLoading>
        <QScreen5></QScreen5>
        <QScreen6></QScreen6>
        <QScreen7></QScreen7>
        <QScreen8></QScreen8>
        <QScreenResults></QScreenResults>
      </Quiz> */}
    </div>
  );
}

export default App;
