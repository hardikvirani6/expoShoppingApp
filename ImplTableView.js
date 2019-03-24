import React, { Component } from 'react';
import { ActivityIndicator, Dimensions, Image, ScrollView, StyleSheet, Switch, Text, View, FlatList,
    TouchableHighlight } from 'react-native';

import { Cell, Section, TableView } from 'react-native-tableview-simple';

const window = Dimensions.get('window');
import img from './images/locked.png';

const REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

export default class flatListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: null,
            loaded: false,
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        debugger;
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({dataSource : responseData.movies, loaded: true,});
            })
            .done();
    }

    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text>
                    Loading movies...
                </Text>
            </View>
        );
    }

    keyExtractor = (item, index) => item.id;

    setBtnClick() {
        alert('Selected Index: ');
    }

    renderMovie(movie) {
        return (
        <Cell
            cellStyle="Basic"
            title="Pressable w/ accessory"
            accessory="DisclosureIndicator"
            onPress={() => console.log('Heyho!')}
        >
            <View style={styles.container}>

                <Image source={img} resizeMode='contain' style={{height: 55, width: 55, margin:10}}/>
                {/*uri: movie.item.posters.detailed*/}
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{movie.item.title}</Text>
                    <Text style={styles.year}>{movie.item.year}</Text>
                </View>

                <TouchableHighlight  style={styles.btnCss}
                                     onPress={(item, index) => {
                                         alert(movie.item.title + ' ' + index);
                                     }}
                >
                    <Text style={{alignSelf:'center', color:'white',}}>Show</Text>
                </TouchableHighlight>

            </View>
        </Cell>
        );
    }

    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

        return (
            <ScrollView contentContainerStyle={styles.stage}>
                <TableView>
                    <Section header="STANDARD" footer="A Footer">
                        {this.renderMovie()}
                    </Section>
            {/*<ScrollView>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={this.renderMovie}
                    style={styles.listView}
                    keyExtractor={this.keyExtractor}
                    extraData={this.state.dataSource}
                />*/}
                </TableView>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        borderBottomWidth:1,
        borderBottomColor:'lightgray'
    },
    rightContainer: {
        flex: 1,
    },
    title: {
        fontSize: 17,
        marginBottom: 8,
        textAlign: 'left',
    },
    year: {
        textAlign: 'left',
    },
    listView: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF',
    },
    btnCss: {
        width:65,
        padding:5,
        backgroundColor: 'green',
        borderWidth:1,
        borderRadius:6,
        borderColor:'green',
        marginRight:15
    }
});
