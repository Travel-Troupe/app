import * as SecureStore from 'expo-secure-store';


export const setItem = async (key, value) => {
  try {
    return await SecureStore.setItemAsync(key, JSON.stringify(value))
  } catch(e) {
    console.error('an error occured :(', e?.message)
  }
}

export const getItem = async (key) => {
  try {
    const value = await SecureStore.getItemAsync(key)
    if(value !== null) {
      return JSON.parse(value)
    }
  } catch(e) {
    console.error('an error occured :(', e?.message)
  }
}
