import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getStacklineApiData,
  selectStacklineData,
} from "../../../store/features/stacklineSlice";
import { AppDispatch } from "../../../store/store";
import TopBar from "../../molecules/top-bar";
import {
  DivMainPageBody,
  DivMainPageContainer,
  SectionDataAnalytics,
  SectionProductDetails,
} from "./styles";
import ProductDetails from "../../organisms/product-details";

const MainPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, isLoading, error } = useSelector(selectStacklineData);

  useEffect(() => {
    dispatch(getStacklineApiData());
  }, [dispatch]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (data.length === 0) return <div>No data</div>;

  return (
    <DivMainPageContainer>
      <TopBar />
      <DivMainPageBody>
        <SectionProductDetails>
          <ProductDetails data={data[0]} />
        </SectionProductDetails>
        <SectionDataAnalytics></SectionDataAnalytics>
      </DivMainPageBody>
    </DivMainPageContainer>
  );
};

export default MainPage;
