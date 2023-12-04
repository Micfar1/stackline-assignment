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
  LoadingContainer,
  SectionDataAnalytics,
  SectionProductDetails,
} from "./styles";
import ProductDetails from "../../organisms/product-details";
import SalesLineChart from "../../organisms/product-details/sales-line-chart";
import SalesTable from "../../organisms/sales-table";
import { FiLoader } from "react-icons/fi";

const MainPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, isLoading, error } = useSelector(selectStacklineData);

  useEffect(() => {
    dispatch(getStacklineApiData());
  }, [dispatch]);

  if (isLoading)
    return (
      <DivMainPageContainer data-loading={`${isLoading}`}>
        <TopBar />
        <LoadingContainer>
          <FiLoader size="58" />
        </LoadingContainer>
      </DivMainPageContainer>
    );

  if (error) return <div>Error: {error}</div>;
  if (data.length === 0) return <div>No data</div>;

  return (
    <DivMainPageContainer>
      <TopBar />
      <DivMainPageBody>
        <SectionProductDetails>
          <ProductDetails data={data[0]} />
        </SectionProductDetails>
        <SectionDataAnalytics>
          <SalesLineChart salesData={data[0].sales} />
          <SalesTable salesData={data[0].sales} />
        </SectionDataAnalytics>
      </DivMainPageBody>
    </DivMainPageContainer>
  );
};

export default MainPage;
