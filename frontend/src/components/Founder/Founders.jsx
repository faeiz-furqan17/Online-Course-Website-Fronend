import React from "react";
import Typography from "@mui/material/Typography";
import styles from "./Founders.module.scss";

function Founders() {
  return (
    <>
      <Typography variant="h2" color="primary">
        Message from our founders
      </Typography>
      <div className={styles.mainContainer}>
        <div className={styles.Box2}>
          <img
            src="https://cdn.britannica.com/99/236599-050-1199AD2C/Mark-Zuckerberg-2019.jpg"
            alt=""
          />
          <Typography variant="h4">Mark Zingerburger</Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontStyle: "italic",
            }}
          >
            "Founder of Facebook, Mark Zuckerberg is known for his innovative
            ideas and visionary leadership. He is also a pioneer in the field of
            technology and has a strong work ethic and dedication."
          </Typography>
        </div>
        <div className={styles.Box1}>
          <img
            src="https://cdn.britannica.com/99/236599-050-1199AD2C/Mark-Zuckerberg-2019.jpg"
            alt=""
          />
          <Typography variant="h4">Mark Zingerburger</Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontStyle: "italic",
            }}
          >
            "Founder of Facebook, Mark Zuckerberg is known for his innovative
            ideas and visionary leadership. He is also a pioneer in the field of
            technology and has a strong work ethic and dedication."
          </Typography>
        </div>
        <div className={styles.Box3}>
          <img
            src="https://cdn.britannica.com/99/236599-050-1199AD2C/Mark-Zuckerberg-2019.jpg"
            alt=""
          />
          <Typography variant="h4">Mark Zingerburger</Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontStyle: "italic",
            }}
          >
            "Founder of Facebook, Mark Zuckerberg is known for his innovative
            ideas and visionary leadership. He is also a pioneer in the field of
            technology and has a strong work ethic and dedication."
          </Typography>
        </div>
      </div>
    </>
  );
}

export default Founders;
