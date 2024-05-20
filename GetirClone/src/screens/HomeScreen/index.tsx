import React from "react";
import styles from "./styles";
import { ScrollView } from "react-native";
import HeaderMain from "../../components/specific/HeaderMain";
import BannerCarousel from "../../components/specific/BannerCarouel";
import MainCategories from "../../components/specific/MainCategories";

const index = () => {
  return (
    <ScrollView
      stickyHeaderIndices={[0]}
      style={{ backgroundColor: "#f5f5f5" }}
    >
      <HeaderMain />
      <BannerCarousel />
      <MainCategories />
    </ScrollView>
  );
};

export default index;
