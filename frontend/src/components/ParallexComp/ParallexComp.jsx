import React from "react";
import styles from "./Parallex.module.scss"; // Ensure the extension is .module.scss if using CSS modules
import officeImage from "../../assets/marqueLogos/office.jpg"; // Import the image
import teacherImage from "../../assets/marqueLogos/teacher.jpg";
import Typography from "@mui/material/Typography";

function ParallexComp() {
  return (
    <>
      <div
        className={styles.mainContainer}
        style={{ backgroundImage: `url(${officeImage})` }}
      >
        <Typography variant="h1">Get your dream job.</Typography>
      </div>
      <div
        className={styles.mainContainer}
        style={{ backgroundImage: `url(${teacherImage})` }}
      >
        <Typography variant="h1">Become an excellent teacher</Typography>
      </div>
    </>
  );
}

export default ParallexComp;
