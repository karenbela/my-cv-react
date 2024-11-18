import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const LeftPanel = () => {
  const [leftPanel, setLeftPanel] = useState({});
  const [exp, setExp] = useState({}); 

  useEffect(() => {
    const db = getDatabase();
    const leftPanelRef = ref(db, "LeftPanel/");
    onValue(leftPanelRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setLeftPanel(data);
      }
    });
  }, []);

  useEffect(() => {
    const db = getDatabase();
    const expRef = ref(db, "exp/");
    onValue(expRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setExp(data);
      }
    });
  }, []);

  const activities = [
    leftPanel.activity1,
    leftPanel.activity2,
    leftPanel.activity3,
  ].filter(activity => activity); 

  return (
    <aside className="services">
      <div className="text-left">
        <h1>{leftPanel.title3 || "Default Title"}</h1>
        <ul>
          {activities.length > 0 ? activities.map((activity, index) => (
            <li key={index}>
              <h4>{activity}</h4>
            </li>
          )) : <li>Tidak ada aktivitas yang tersedia.</li>}
        </ul>
        <div className="line"></div>
        <div className="organisation">
          <h4>{leftPanel.subtitle || "Default Subtitle"}</h4>
        </div>
      </div>
      
      {}
      <div className="exp">
        <h2>{exp.title || "Default Title for Experience"}</h2>
        <p>{exp.subtitle || "Default Subtitle for Experience" }</p>
        <h2>{exp.title1 || "Default Title1 for Experience"}</h2>
        <p>{exp.subtitle1 || "Default Subtitle1 for Experience"}</p>
      </div>
    </aside>
  );
};

export default LeftPanel;