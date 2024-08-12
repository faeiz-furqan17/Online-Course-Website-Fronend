import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCourseSlicerFunc,
  fetchCategoryList,
} from "../../redux/user/userSlice";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormHelperText from "@mui/material/FormHelperText";
import { Input, Select, MenuItem } from "@mui/material";

function CourseAdd() {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.user.categoryList);
  const user = useSelector((state) => state.user);
  const [course, setCourse] = React.useState({
    name: "",
    price: {},
    duration: {},
    description: "",
    category: [],
  });
  const handleChange = (e) => {
    const { name, value, type, selectedOptions } = e.target;
    if (name === "category") {
      const selectedValues = Array.from(selectedOptions, (option) =>
        Number(option.value)
      );
      setCourse((prevCourse) => ({
        ...prevCourse,
        [name]: selectedValues,
      }));
    } else {
      setCourse((prevCourse) => ({
        ...prevCourse,
        [name]: type === "number" ? Number(value) : value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddCourse(course);
  };

  const handleAddCourse = (course) => {
    course.price = Number(course.price);

    dispatch(
      addCourseSlicerFunc({ token: user.data.token.access, courseData: course })
    );
  };
  useEffect(() => {
    dispatch(fetchCategoryList());
  }, []);

  return (
    <>
      <FormControl>
        <FormLabel>Course Title</FormLabel>
        <Input
          type="text"
          name="name"
          value={course.name}
          onChange={handleChange}
          placeholder="enter the course name"
        />

        <FormHelperText>remember to choose a catchy name*</FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel>Course Description</FormLabel>
        <Input
          type="text"
          name="description"
          value={course.description}
          onChange={handleChange}
          placeholder="describe the course in detail"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Course Price</FormLabel>
        <Input
          type="number"
          name="price"
          value={course.price}
          onChange={handleChange}
          placeholder="enter the course price"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Course Duration</FormLabel>
        <Input
          type="number"
          name="duration"
          value={course.duration}
          onChange={handleChange}
          placeholder="enter the course duration in hours"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Course Category</FormLabel>
        <Select
          labelId="category-label"
          id="category-select"
          multiple
          value={course.category}
          onChange={handleChange}
          name="category"
          renderValue={(selected) =>
            selected
              .map((id) => {
                const cat = category.find((c) => c.id === id);
                return cat ? cat.name : "";
              })
              .join(", ")
          }
        >
          {category.map((cat) => (
            <MenuItem key={cat.id} value={cat.id}>
              {cat.name}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>select the course category*</FormHelperText>
      </FormControl>
      <button type="submit" onClick={handleSubmit}>
        Add Course
      </button>
    </>
  );
}

export default CourseAdd;
