import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { enrollmentAddSlicerFunc } from "../../redux/user/userSlice";
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
import { orange } from "@mui/material/colors";

function CourseCard({
  courseId,
  name,
  description,
  price,
  instructors = [],
  categories = [],
  duration,
}) {
  debugger;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const handleEnrollment = (courseId) => {
    if (!user.data.token) {
      return alert(
        "You must be logged in to enroll in courses or view search results."
      );
    } else {
      debugger;
      dispatch(
        enrollmentAddSlicerFunc({
          token: user.data.token.access,
          courseId: courseId,
        })
      );
      alert("Course Enrolled Successfully");
    }
  };

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

        <Card sx={{ width: 420, padding: 2 }} variant="outlined">
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
              onClick={() => {
                handleEnrollment(courseId);
              }}
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
