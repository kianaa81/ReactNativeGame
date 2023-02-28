import React from 'react';
import PropTypes from 'prop-types';

import {Text, StyleSheet} from 'react-native';

class RandomNumber extends React.Component {
   static PropTypes = {
       number: PropTypes.number.isRequired,
   };
   
  render() {
      return(
    <Text style={styles.random}>{this.props.number}</Text>
    );
  }
}

const styles = StyleSheet.create({
random: {
    backgroundColor: 'rgb(128, 87, 167)',
    width: 110,
    marginHorizontal: 25,
    marginVertical: 25,
    fontSize: 35,
    textAlign: 'center',
  },
});  


export default RandomNumber;
