import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

const SmallBox = () => {
  return (
    
    <div style={styles.box}>
      <div style = {styles.box2}>
       <div style = {styles.box3}>

       <Image style = {{
          width: 180,
          height: 180,

        }}source={require('./facebook.png')} />

       </div>
      

      </div>

    </div>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 250,
    height: 300,
    backgroundColor: '#ECECEB',
    //for the positioning of the box
    marginLeft: 50,
    marginTop: 100,
  },

  box2: {
    width: 230,
    height:230,
    backgroundColor: 'black',
    //for the positioning of the box
    marginLeft: 10,
    marginTop: 10,
  
  },

  box3: {
    width: 230,
    height:230,
    //for the positioning of the box
    marginLeft: 25,
    paddingTop: 22,
  
  },


});

export default SmallBox;