import { getItem } from "../utils/AppStorage";

export default class User {
  static async getProfile() {
    const currentUser = await getItem('user')
  }
}