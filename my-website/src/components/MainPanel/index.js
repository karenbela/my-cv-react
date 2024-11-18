import { useEffect, useState, CSSProperties } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import BeatLoader from "react-spinners/BeatLoader";
import "../../App.css";
import { Fade } from "react-awesome-reveal";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const MainPanel = () => {
  const [mainPanel, setMainPanel] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getDatabase();
    setLoading(true);
    const mainPanelRef = ref(db, "MainPanel/");
    onValue(mainPanelRef, (snapshot) => {
      const data = snapshot.val();
      setMainPanel(data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {!loading && (
        <Fade>
          <div className="profile-picture">
            <img src={mainPanel.images} alt="ProfilePicture" />
          </div>
        </Fade>
      )}
      {loading && (
        <BeatLoader
          loading={loading}
          cssOverride={override}
          size={20}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
    </div>
  );
};

export default MainPanel;