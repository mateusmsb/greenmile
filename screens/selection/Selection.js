import React, { Component } from 'react';
import {
  View,
  Picker,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import selectionStyles from './Styles'
import { fetchData } from '../../redux/actions/dataActions'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import data_mock from '../../data-mock';
import fillArray from '../../functions/fillArray'
import fillArrayModule from '../../functions/fillArrayModule'


const data = data_mock;
const languageArray = [];
const moduleArray = [1, 2, 3];


const styles = selectionStyles

class Selection extends Component {


  constructor(props) {
    super(props);
    this.state = {
      APIresponse: 'nulo'
    };
  }

  componentDidMount() {

    fillArray(languageArray, data)
    fillArrayModule(moduleArray, data)
    console.log(this.props.dataReducerP)
    console.log(languageArray)

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
            <Picker>
              {languageArray.map((item, index) => {
                return (<Picker.Item label={item} value={item} key={index} />)
              })}
            </Picker>

          </View>

          <Text style={styles.text}>Selecione o módulo</Text>
          <View style={styles.picker} >
            <Picker>
              {moduleArray.map((item, index) => {
                return (<Picker.Item label={item} value={item} key={index} />)
              })}
            </Picker>
          </View>
          <TouchableOpacity style={styles.button}>
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
