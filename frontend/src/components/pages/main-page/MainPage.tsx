import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getStacklineApiData,
  selectStacklineData,
} from "../../../store/features/stacklineSlice";
import { AppDispatch } from "../../../store/store";
import TopBar from "../../molecules/top-bar";

const MainPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, isLoading, error } = useSelector(selectStacklineData);

  useEffect(() => {
    dispatch(getStacklineApiData());
  }, [dispatch]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <TopBar />
    </div>
  );
};

export default MainPage;
