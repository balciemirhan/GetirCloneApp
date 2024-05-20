import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import categoriesGetir from "../../../data/categoriesGetir"; // data
import { Category } from "../../../models"; //  models
import CategoryItem from "../CategoryItem";

const index = () => {
  const [categories, setCategories] = useState<Category[]>(categoriesGetir);

  return (
    <View>
      <View style={styles.listContainer}>
        {categories.map(item => (
          <CategoryItem key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
});



/* Bu kodda, useState hook'u categoriesGetir fonksiyonunu çağırır ve bu fonksiyonun dönüş değeri olan dizi, Category türünden bir dizi olarak belirtilir. Yani, categories değişkeni, Category türünden oluşan bir dizi olur. Ve bu dizi, categoriesGetir fonksiyonunun döndürdüğü verilerle eşleşir. Dolayısıyla, categories değişkeni, Category modeli ile uyumlu bir şekilde kullanılır. */