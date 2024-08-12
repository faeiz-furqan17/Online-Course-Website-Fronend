import React from "react";
import Typography from "@mui/material/Typography";
import styles from "./Founders.module.scss";

const foundersData = [
  {
    imgSrc:
      "https://cdn.britannica.com/99/236599-050-1199AD2C/Mark-Zuckerberg-2019.jpg",
    name: "Mark Zingerburger",
    message: `"Founder of Facebook, Mark Zuckerberg is known for his innovative ideas and visionary leadership. He is also a pioneer in the field of technology and has a strong work ethic and dedication."`,
    className: styles.Box2,
  },
  {
    imgSrc:
      "https://cdn.britannica.com/99/236599-050-1199AD2C/Mark-Zuckerberg-2019.jpg",
    name: "Mark Zingerburger",
    message: `"Founder of Facebook, Mark Zuckerberg is known for his innovative ideas and visionary leadership. He is also a pioneer in the field of technology and has a strong work ethic and dedication."`,
    className: styles.Box1,
  },
  {
    imgSrc:
      "https://cdn.britannica.com/99/236599-050-1199AD2C/Mark-Zuckerberg-2019.jpg",
    name: "Mark Zingerburger",
    message: `"Founder of Facebook, Mark Zuckerberg is known for his innovative ideas and visionary leadership. He is also a pioneer in the field of technology and has a strong work ethic and dedication."`,
    className: styles.Box3,
  },
];

function Founders() {
  return (
    <>
      <Typography variant="h2" color="primary">
        Message from our founders
      </Typography>
      <div className={styles.mainContainer}>
        {foundersData.map((founder, index) => (
          <div key={index} className={founder.className}>
            <img src={founder.imgSrc} alt={founder.name} />
            <Typography variant="h4">{founder.name}</Typography>
            <Typography
              variant="subtitle1"
              sx={{
                fontStyle: "italic",
              }}
            >
              {founder.message}
            </Typography>
          </div>
        ))}
      </div>
    </>
  );
}

export default Founders;
