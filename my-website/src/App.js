import "./App.css";
import { Footer, LeftPanel, RightPanel, MainPanel } from "./components";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

const App = () => {
  return (
    <Fade>
      <div>
        <div className="center">
          <div className="namabesar">
            <Zoom>
              <h1>Karen Kudemus</h1>
            </Zoom>
          </div>
        </div>
        <main className="container-main">
          <RightPanel />
          <MainPanel />
          <LeftPanel />
        </main>
        <Footer />
      </div>
    </Fade>
  );
};

export default App;
