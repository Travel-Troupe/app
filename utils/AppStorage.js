import AsyncStorage from '@react-native-async-storage/async-storage';

export const setItem = async (key, value) => {
  try {
    return await AsyncStorage.setItem(key, JSON.stringify(value))
  } catch(e) {
    console.error('an error occured :(', e?.message)
  }
}

export const getItem = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key)
    if(value !== null) {
      return JSON.parse(value)
    }
  } catch(e) {
    console.error('an error occured :(', e?.message)
  }
}
