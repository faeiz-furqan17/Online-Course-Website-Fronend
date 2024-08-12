import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Chip, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {
  addPreferenceSlicerFunc,
  fetchCategoryList,
} from "../../redux/user/userSlice";

function PreferenceAdd() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const category = useSelector((state) => state.user.categoryList);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleAddPreference = (categoryIds) => {
    dispatch(
      addPreferenceSlicerFunc({
        token: user.data.token.access,
        category: categoryIds,
      })
    );
  };

  const handleToggleCategory = (categoryId) => {
    setSelectedCategories((prevSelectedCategories) => {
      if (prevSelectedCategories.includes(categoryId)) {
        return prevSelectedCategories.filter((id) => id !== categoryId);
      } else {
        return [...prevSelectedCategories, categoryId];
      }
    });
  };

  useEffect(() => {
    dispatch(fetchCategoryList());
  }, [dispatch]);

  return (
    <div>
      <h2>Add Preferences</h2>
      {category.map((cat) => (
        <Chip
          key={cat.id}
          label={cat.name}
          color="warning"
          variant={
            selectedCategories.includes(cat.id) ? "contained" : "outlined"
          }
          size="small"
          deleteIcon={<AddIcon />}
          onDelete={() => handleToggleCategory(cat.id)}
          clickable
          style={{ margin: "5px" }}
        />
      ))}

      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          handleAddPreference(selectedCategories);
          setSelectedCategories([]);
        }}
        style={{ marginTop: "10px" }}
      >
        Confirm
      </Button>
    </div>
  );
}

export default PreferenceAdd;
