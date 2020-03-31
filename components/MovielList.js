import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import MealItem from './MovieItem';

const MealList = props => {


    const renderMealItem = itemData => {
        return (
          <MealItem
            title={itemData.item.title}
            image={itemData.item.imageUrl}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
            onSelectMeal={() => {
              props.navigation.navigate({
                routeName: 'MealDetail',
                params: {
                  mealId: itemData.item.id
                }
              })
            }}
          />
        );
      };
    
    return <View style={Styles.screen}>
        <FlatList
            data={props.listData}
            keyExtractor={(item, index) => item.id}
            renderItem={renderMealItem}
            style={{ width: '100%' }}
        />
    </View>

};



const Styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    }
});


export default MealList;