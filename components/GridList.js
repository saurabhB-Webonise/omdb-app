import React from 'react';
import { FlatList } from 'react-native';
import MovieGridTile from './MovieGridTile';
import Colors from '../constants/color'

const GridList = props => {
    const renderGridItem = itemData => {
        return (
            <MovieGridTile
                title={itemData.item.Title}
                Poster={itemData.item.Poster}
                onSelect={props.onSelect.bind(this, itemData)}
            />
        );
    };

    return <FlatList {...props.style}
        keyExtractor={(item, index) => item.id}
        data={props.listData}
        renderItem={renderGridItem}
        numColumns={2}/>
};

export default GridList;