import React from 'react';
import {View, Text, StyleSheet, Button } from 'react-native';
import {CATEGORIES} from '../data/dummy-data';



const CategoryMealsScreen = props => {
    
      const catId= props.navigation.getParam('categoryId');

      const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

      
    return(
        <View style={styles.screen}>
            <Text>The Category Meals Screen!</Text>
            <Text>{selectedCategory.title}</Text>
            <Button title = "Go to Detail" onPress={() =>{
                props.navigation.navigate({routeName: 'MealDetail'});
            }}/>
            <Button title= "Go Back" onPress={() => {
                props.navigation.pop();
            }}/>
        </View>

    );
};
CategoryMealsScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title,
        
    };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealsScreen;