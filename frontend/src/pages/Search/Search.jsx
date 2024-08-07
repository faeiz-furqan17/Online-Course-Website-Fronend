import React from "react";
import { useSelector } from "react-redux";
import CourseCard from "../../components/CourseCard/CourseCard";
import { Skeleton, Typography, Divider } from "@mui/material";

function Search() {
  const courses = useSelector((state) => state.user.searchResult);

  const isLoading = !courses || courses.length === 0;

  return (
    <>
      <Typography variant="h2" align="left" margin={2}>
        Search Results
      </Typography>
      <Divider
        sx={{
          width: "98%",
          margin: "auto",
        }}
      />
      {!isLoading && (
        <Typography variant="h4" align="left" margin={2}>
          Total Results {courses.Courses.length}
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
          courses.Courses.map((course) => (
            <CourseCard
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
    </>
  );
}

export default Search;
