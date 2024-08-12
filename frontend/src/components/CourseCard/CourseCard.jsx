import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { enrollmentAddSlicerFunc } from "../../redux/user/userSlice";
import Snackbar from "@mui/material/Snackbar";
import { Card, Typography, Button } from "@mui/material";
import styles from "./CourseCard.module.scss";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import SchoolIcon from "@mui/icons-material/School";

function CourseCard({
  courseId,
  name,
  description,
  price,
  instructors = [],
  categories = [],
  duration,
}) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [open, setOpen] = React.useState(false);

  const handleEnrollment = (courseId) => {
    if (!user.data.token) {
      return alert(
        "You must be logged in to enroll in courses or view search results."
      );
    } else {
      dispatch(
        enrollmentAddSlicerFunc({
          token: user.data.token.access,
          courseId: courseId,
        })
      );
      setOpen(user.success);
    }
  };

  const details = [
    {
      icon: <AttachMoneyIcon color="primary" />,
      label: `${price}`,
    },
    {
      icon: <TimelapseIcon color="primary" />,
      label: `${duration} days`,
    },
    {
      icon: <SchoolIcon color="primary" />,
      label: instructors
        .map((instructor) => instructor.member.firstname)
        .join(", "),
    },
    {
      icon: <SchoolIcon color="primary" />,
      label: categories.map((category) => category.name).join(", "),
    },
  ];

  return (
    <>
      <div className={styles.mainContainer}>
        <Card sx={{ width: 420, padding: 2 }} variant="outlined">
          <Typography variant="h5">{name}</Typography>
          <Typography variant="body2" align="left" color="textSecondary">
            {description}
          </Typography>

          {details.map((detail, index) => (
            <div key={index} className={styles.straightRow}>
              {detail.icon}
              <Typography
                variant="subtitle1"
                align="left"
                whiteSpace="nowrap"
                marginLeft="2px"
              >
                {detail.label}
              </Typography>
            </div>
          ))}

          <div
            style={{ marginTop: "10px", marginBottom: "10px", width: "100%" }}
          >
            <Button
              variant="contained"
              color="primary"
              size="small"
              style={{ width: "100%" }}
              onClick={() => handleEnrollment(courseId)}
            >
              Enroll Now
            </Button>
          </div>
        </Card>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
        message="Course Enrolled Successfully"
      />
    </>
  );
}

export default CourseCard;
