import React, { Component, useEffect } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
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
              this.setState({
                moduleArray: fillArrayModule(this.state.moduleArray, this.props.dataReducerP.data),
                languageArray: fillArray(this.state.langaugeArray, this.props.dataReducerP.data)
              }),
                console.log('botao', this.props.dataReducerP.data)
            }}
          >
            <Text>Pesquisar</Text>
          </TouchableOpacity>

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
