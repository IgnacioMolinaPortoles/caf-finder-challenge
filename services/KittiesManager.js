import { Dimensions } from "react-native";
import { generateKey, getRandomBetween } from "../utils";

const URL = "http://placekitten.com/";
const kittiesByPage = 5;

export const getKitties = async () => {
  let width = parseInt(Dimensions.get("window").width * 0.4);
  let kitties = [];

  for (let index = 0; index < kittiesByPage; index++) {
    let height = parseInt(getRandomBetween(20, 60)) * 10;
    let url = `${URL}${width}/${height}`;
    kitties.push({
      width,
      height,
      id: generateKey(),
      uri: url,
    });
  }

  return kitties;
};
