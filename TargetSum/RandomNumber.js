import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

class RandomNumber extends React.Component {
   static propTypes = {
       number: PropTypes.number.isRequired,
   };
   
   handlePress = () => {

   };

  render() {
      return(
          <TouchableOpacity onPress={this.handlePress}>
                  <Text style={styles.random}>{this.props.number}</Text>
          </TouchableOpacity>
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
