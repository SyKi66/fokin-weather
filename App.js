import React from 'react';
import {Alert} from "react-native";
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from "axios";

const API_KEY = '945daa2d6bdd30a6f1dc1fc67811a8ec';

export default class extends React.Component {
  state = {
    isLoading: true
  }
  getWeather = async(latitude, longitude) => {
    const {data} = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}`
    );
    console.log(data);
  }
  getLocation = async() => {
    try {
      //throw Error();
      await Location.requestPermissionsAsync();
      const {
        coords: {latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      //this.setState({isLoading: false});

      //console.log(coords.latitude , coords.longitude);
    } catch (error) {
      Alert.alert("승인하자..", "거절하면 위치 못봐..");
    }
  }
  
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}