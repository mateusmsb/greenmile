import React, { Component, useEffect } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { Picker } from '@react-native-community/picker';
import selectionStyles from './Styles'
import { fetchData } from '../../redux/actions/dataActions'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fillArray from '../../functions/fillArray'
import fillArrayModule from '../../functions/fillArrayModule'






const styles = selectionStyles

class Selection extends Component {


  constructor(props) {
    super(props);
    this.state = {
      moduleArray: [],
      languageArray: []
    };
  }

  componentDidMount() {
    this.props.fetchData()
    console.log('did', this.props.dataReducerP.data[0])
  }
  render() {
    if (this.props.dataReducerP.isFetching) {
      return (

        <View style={styles.loading}>
          <Text>Carregando dados</Text>
          <ActivityIndicator size='large' color='green' />
        </View>
      )
    }
    else {
      return (
        <View style={styles.background}>
          <View style={styles.header} />
          <Text style={styles.text}>Selecione o idioma</Text>
          <View style={styles.picker}>
            <Picker
              selectedValue={this.state.language}
              onValueChange={(itemValue) => this.setState({ language: itemValue })}
            >
              {this.state.languageArray.map((item, index) => {
                return (<Picker.Item label={item} value={item} key={index} />)
              })}
            </Picker>

          </View>

          <Text style={styles.text}>Selecione o módulo</Text>
          <View style={styles.picker} >
            <Picker
              selectedValue={this.state.module}
              onValueChange={(itemValue) => this.setState({ module: itemValue })}
            >
              {this.state.moduleArray.map((item, index) => {
                return (<Picker.Item label={item} value={item} key={index} />)
              })}
            </Picker>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              //this.setState({ languageArray: fillArray(this.languageArray, this.props.dataReducerP.data) })
              console.log(this.props.dataReducerP.data[0].resource.value)
            }}
          >
            <Text>Pesquisar</Text>
          </TouchableOpacity>

          <View style={{
            flex: 1,
            backgroundColor: 'white'

          }}>
            <FlatList
              data={this.props.dataReducerP.data}
              renderItem={
                (item) =>
                  <Text> {item.resource.value} </Text>
              }

            />
            <Text>oi</Text>
          </View>

        </View>

      )

    }
  }
};

Selection.propTypes = {
  fetchData: PropTypes.func.isRequired,
  dataReducerP: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  return {
    dataReducerP: state
  };
};

export default connect(mapStateToProps, { fetchData })(Selection);
