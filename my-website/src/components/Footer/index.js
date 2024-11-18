import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const Footer = () => {
  const [footer, setFooter] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const FooterRef = ref(db, "Footer/");
    onValue(FooterRef, (snapshot) => {
      const data = snapshot.val();
      setFooter(data);
    });
  }, []);

  return (
    <footer>
      {" "}
      <ul class="social-media">
        {" "}
        <li>
          <a
            href={footer.facebook || "#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </li>{" "}
        <li>
          <a
            href={footer.instagram || "#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </li>{" "}
        <li>
          <a
            href={footer.github || "#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>{" "}
      </ul>{" "}
    </footer>
  );
};

export default Footer;
