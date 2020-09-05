import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Picker,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import selectionStyles from './Styles'


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

/* function timeout(ms, promise) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject(new Error("timeout"))
    }, ms)
    promise.then(resolve, reject)
  })
} */


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
    getI18NFromApi(this.URL)
      .then(response => {
        this.setState({ APIresponse: response, isFetching: false });
      }).then(() => console.log(this.state.APIresponse))
  }

  /* componentDidMount() {
    timeout(30000, getI18NFromApi(this.URL)).then(function (response) {
      this.setState({ APIresponse: response, isFetching: false })
    }).catch(function (error) {
      // might be a timeout error
    })
  } */
  render() {
    if (this.state.isFetching) {
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
            //selectedValue={selectedValue}

            // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>

          </View>

          <Text style={styles.text}>Selecione o módulo</Text>
          <View style={styles.picker} >
            <Picker
            //selectedValue={selectedValue}
            // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
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

export default Selection;
