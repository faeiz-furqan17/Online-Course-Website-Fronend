import React from "react";
import Marquee from "react-fast-marquee";
import styles from "./MarqueList.module.scss";

import img1 from "../../assets/marqueLogos/pngaaa.com-145086.png";
import img2 from "../../assets/marqueLogos/pngaaa.com-851325.png";
import img3 from "../../assets/marqueLogos/pngaaa.com-1331494.png";
import img4 from "../../assets/marqueLogos/pngaaa.com-1331532.png";
import img5 from "../../assets/marqueLogos/pngaaa.com-1331554.png";
import img6 from "../../assets/marqueLogos/pngaaa.com-1833206.png";
import img7 from "../../assets/marqueLogos/pngaaa.com-2448101.png";
import img8 from "../../assets/marqueLogos/pngaaa.com-3633048.png";
import img9 from "../../assets/marqueLogos/pngaaa.com-3911066.png";
import img10 from "../../assets/marqueLogos/pngaaa.com-4331213.png";
import Typography from "@mui/material/Typography";

function MarqueList() {
  return (
    <>
      <Typography variant="h2" color="primary">
        Explore the world of technology
      </Typography>
      <Marquee className={styles.mainContainer}>
        <img src={img1} alt="Logo 1" className={styles.marqueeImage} />
        <img src={img2} alt="Logo 2" className={styles.marqueeImage} />
        <img src={img3} alt="Logo 3" className={styles.marqueeImage} />
        <img src={img4} alt="Logo 4" className={styles.marqueeImage} />
        <img src={img5} alt="Logo 5" className={styles.marqueeImage} />
        <img src={img6} alt="Logo 6" className={styles.marqueeImage} />
        <img src={img7} alt="Logo 7" className={styles.marqueeImage} />
        <img src={img8} alt="Logo 8" className={styles.marqueeImage} />
        <img src={img9} alt="Logo 9" className={styles.marqueeImage} />
        <img src={img10} alt="Logo 10" className={styles.marqueeImage} />
      </Marquee>

      <Marquee direction="right" className={styles.mainContainer}>
        <img src={img2} alt="Logo 2" className={styles.marqueeImage} />
        <img src={img1} alt="Logo 1" className={styles.marqueeImage} />
        <img src={img4} alt="Logo 4" className={styles.marqueeImage} />
        <img src={img3} alt="Logo 3" className={styles.marqueeImage} />
        <img src={img6} alt="Logo 6" className={styles.marqueeImage} />
        <img src={img5} alt="Logo 5" className={styles.marqueeImage} />
        <img src={img8} alt="Logo 8" className={styles.marqueeImage} />
        <img src={img7} alt="Logo 7" className={styles.marqueeImage} />
        <img src={img10} alt="Logo 10" className={styles.marqueeImage} />
        <img src={img9} alt="Logo 9" className={styles.marqueeImage} />
      </Marquee>
    </>
  );
}

export default MarqueList;
