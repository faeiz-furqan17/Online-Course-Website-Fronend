import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCourseList } from "../../redux/user/userSlice";
import { Skeleton, Typography, Divider, Button } from "@mui/material";
import { useEffect } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import CourseCard from "../../components/CourseCard/CourseCard";
function Courses() {
  const courses = useSelector((state) => state.user.courseList);
  const isLoading = !courses || courses.length === 0;
  const [offset, setOffset] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCourseList(offset));
  }, [offset]);
  const handleLoadMore = () => {
    if (courses.results.length > 1) {
      setOffset(offset + 10);
    }
  };
  const handleLoadLess = () => {
    if (offset != 0) setOffset(offset - 10);
  };

  return (
    <>
      <Typography variant="h2" align="left" margin={2}>
        Courses
      </Typography>
      <Divider
        sx={{
          width: "98%",
          margin: "auto",
        }}
      />
      {!isLoading && (
        <Typography variant="h4" align="left" margin={2}>
          Total Results {courses.results.length}
        </Typography>
      )}

      <div
        style={{
          display: "flex",
          margin: "auto",
          flexDirection: "row",
          flexWrap: "wrap",

          gap: 20,
          padding: 20,
          width: "100%",
          marginTop: 20,
        }}
      >
        {isLoading ? (
          <>
            <Skeleton variant="rectangular" width={210} height={118} />
            <Skeleton variant="rounded" width={210} height={118} />
            <Skeleton variant="rectangular" width={210} height={118} />
          </>
        ) : (
          courses.results.map((course) => (
            <CourseCard
              courseId={course.id}
              key={course.id}
              name={course.name}
              description={course.description}
              price={course.price}
              instructors={course.instructors}
              categories={course.category}
              duration={course.duration}
            />
          ))
        )}
      </div>
      <div
        style={{
          float: "right",
        }}
      >
        <Button
          variant="text"
          color="primary"
          onClick={() => {
            handleLoadLess();
          }}
        >
          <ArrowBackIosIcon fontSize="20px" />
          Previous
        </Button>
        <Button
          variant="text"
          color="primary"
          onClick={() => {
            handleLoadMore();
          }}
        >
          Next
          <NavigateNextIcon />
        </Button>
      </div>
    </>
  );
}

export default Courses;
