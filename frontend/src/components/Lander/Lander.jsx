import React from "react";
import LandingPageAnimation from "../../assets/lottie animations/education.png";
import styles from "./Lander.module.scss";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
function Lander() {
  return (
    <>
      <div className={styles.mainContainer}>
        <img
          src={LandingPageAnimation}
          alt="Landing Page Animation"
          style={{ height: "60vh" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "700px",
          }}
        >
          <Typography variant="h2" color="primary" align="left">
            Welcome To FREE-CS
          </Typography>
          <Typography
            variant="h5"
            sx={{
              textAlign: "left",
            }}
          >
            Learn about computer science, coding, and digital literacy from
            experts around the world. Gain essential skills for the future,
            unlock new career opportunities, and stay ahead in the digital age.
          </Typography>
          <Button
            size="small"
            sx={{
              marginTop: 1,
              width: "30%",
            }}
            variant="contained"
            color="primary"
            endIcon={<ArrowRightAltIcon />}
          >
            Start Learning
          </Button>
        </div>
      </div>
    </>
  );
}

export default Lander;
