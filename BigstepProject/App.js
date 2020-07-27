/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
  Image,
  Button,
  Alert,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('./images/logo.jpeg')} style={styles.image}>
              <View style={styles.body}>
                 <Image style={styles.tinyLogo} resizeMode='center' source={require('./images/nameplate.jpeg')} />
              </View>
              <View style={styles.buttonPos}>
                  <Button
                    title="Get Started"
                    onPress={() => Alert.alert('we are coming soon...')}
                  />
              </View>
            </ImageBackground>
          </View>
        );
};

const styles = StyleSheet.create({
     container: {
        flex: 1,
        flexDirection: "column"
      },
      image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
      text: {
        color: "grey",
        fontSize: 30,
        fontWeight: "bold"
      },
  body: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tinyLogo: {
    width: '70%',
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonPos: {
    width: '100%',
    height: 50,
    backgroundColor: Colors.blue,
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
  },
});

export default App;
