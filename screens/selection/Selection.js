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


async function getI18NFromApi(url) {
  try {
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson
  } catch (error) {
    console.log(error);
  }
}

const styles = selectionStyles

class Selection extends Component {


  constructor(props) {
    super(props);
    this.state = {
      APIresponse: 'nulo',
      isFetching: true
    };
  }

  URL = 'https://api.exchangeratesapi.io/latest'

  componentDidMount() {
    /* getI18NFromApi(this.URL)
      .then(response => {
        this.setState({ APIresponse: response, isFetching: false });
      }).then(() => console.log(this.state.APIresponse)) */

    this.props.fetchData();

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
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>

          </View>

          <Text style={styles.text}>Selecione o módulo</Text>
          <View style={styles.picker} >
            <Picker>
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
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
  indicador: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  return {
    dataReducerP: state
  };
};

export default connect(mapStateToProps, { fetchData })(Selection);
