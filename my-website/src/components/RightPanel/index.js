import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const RightPanel = () => {
  const [rightPanel, setRightPanel] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const rightPanelRef = ref(db, "RightPanel/");
    onValue(rightPanelRef, (snapshot) => {
      const data = snapshot.val();
      setRightPanel(data);
    });
  }, []);

  return (
    <section className="profile">
      <div className="description">
        <h1>{rightPanel.title2}</h1>
        <h2>{rightPanel.expertise}</h2>
        <p>{rightPanel.skilldescription}</p>
        <a href={rightPanel.hireMe || "#"} target="_blank" rel="noopener noreferrer">
        </a>
        <div className="stats">
          <p>
            <strong>{rightPanel.years}</strong> Experience
          </p>
          <p>
            <strong>{rightPanel.clients}</strong> 
          </p>
          <p>
            <strong>{rightPanel.satisfaction}</strong> 
          </p>
        </div>
      </div>
    </section>
  );
};

export default RightPanel;