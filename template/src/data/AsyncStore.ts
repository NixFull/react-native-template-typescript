import AsyncStorage from '@react-native-async-storage/async-storage';

const JWT_TOKEN = '@store:jwtToken';
const USER_INFO = '@store:userInfo';
const BASE_URL_INFO = '@store:baseUrlInfo';

export default class AsyncStore {
  async setBaseUrlInfo(data: string) {
    await AsyncStorage.setItem(BASE_URL_INFO, data);
  }

  async getBaseUrlInfo() {
    const baseUrlInfo = await AsyncStorage.getItem(BASE_URL_INFO);
    return baseUrlInfo;
  }

  async setJwtToken(token: string) {
    await AsyncStorage.setItem(JWT_TOKEN, token);
  }

  async getJwtToken() {
    const jwt = await AsyncStorage.getItem(JWT_TOKEN);
    return jwt;
  }

  async setUserInfo(userInfo: string) {
    await AsyncStorage.setItem(USER_INFO, userInfo);
  }

  async getUserInfo() {
    const user = await AsyncStorage.getItem(USER_INFO);
    return user;
  }

  async disconnect() {
    await AsyncStorage.multiRemove([JWT_TOKEN, USER_INFO, BASE_URL_INFO]);
  }
}
