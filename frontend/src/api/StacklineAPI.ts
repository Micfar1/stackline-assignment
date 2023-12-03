import StacklineData from "../../assets/json/stacklineAssessmentData.json";
import { iStacklineData } from "../models/StacklineDataModel";

/**
 * A mock of an api call to get the stackline data.
 * @returns {Promise<iStacklineData[]>} A promise that resolves to the stackline data after 0.5s.
 */
export const getStacklineData = async (): Promise<iStacklineData[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      res(StacklineData);
    }, 500);
  });
};
