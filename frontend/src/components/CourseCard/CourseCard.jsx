import React, { useEffect } from "react";
import {
  Card,
  List,
  Typography,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import styles from "./CourseCard.module.scss";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import SchoolIcon from "@mui/icons-material/School";

function CourseCard({
  name,
  description,
  price,
  instructors = [],
  categories = [],
  duration,
}) {
  useEffect(() => {
    console.log(
      "CourseCard",
      name,
      description,
      price,
      instructors,
      categories,
      duration
    );
  }, []);

  return (
    <>
      <div className={styles.mainContainer}>
        <Card sx={{ width: 320, padding: 2 }} variant="outlined">
          <Typography variant="h5">{name}</Typography>
          <Typography variant="body2" align="left" color="textSecondary">
            {description}
          </Typography>
          <Typography
            variant="subtitle1"
            align="left"
            whiteSpace={"nowrap"}
            className={styles.straightRow}
          >
            <AttachMoneyIcon color="primary" />
            {price}
          </Typography>
          <Typography
            variant="subtitle1"
            align="left"
            whiteSpace={"nowrap"}
            className={styles.straightRow}
          >
            <TimelapseIcon color="primary" />
            {duration} days
          </Typography>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <SchoolIcon color="primary" />
            <Typography variant="subtitle1" align="left" marginLeft={"2px"}>
              {instructors.map(
                (instructor, index) => instructor.member.firstname
              )}
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <SchoolIcon color="primary" />
            <Typography variant="subtitle1" align="left" marginLeft={"2px"}>
              {categories.map((category, index) => category.name)}
            </Typography>
          </div>
          <div
            style={{
              marginTop: "10px",
              marginBottom: "10px",
              width: "100%",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              size="small"
              style={{ width: "100%" }}
            >
              Enroll Now
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
}
export default CourseCard;
