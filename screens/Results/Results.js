import React, { Component } from 'react';
import { View, Text, FlatList, ImageBackground } from 'react-native'
import { connect } from 'react-redux';

var DATA = [];

class Results extends Component {
    componentDidMount() {
        DATA = this.props.dataReducerP
        console.log(this.props.dataReducerP.data)
    }

    render() {
        return (
            <View style={{
                flex: 1,

            }}>
                <FlatList
                    data={[1, 2, 3]}
                    renderItem={
                        () =>
                            <Text>oi</Text>
                    }
                //keyExtractor={item => item.id}
                />
                <Text>oi</Text>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        dataReducerP: state
    };
};

export default connect(mapStateToProps)(Results);
