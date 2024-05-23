import { Dimensions as RNDimensions } from "react-native";

const { width, height } = RNDimensions.get("window");

const Dimensions = {
  windowWidth: width,
  windowHeight: height,
  // Other dimension constants
  smallMargin: 8,
  mediumMargin: 16,
  largeMargin: 24,
  smallPadding: 8,
  mediumPadding: 16,
  largePadding: 24,
  smallRadius: 4,
  mediumRadius: 8,
  largeRadius: 12,
  // Add other dimensions as needed
};

export default Dimensions;
