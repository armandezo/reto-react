import axios from "axios";
import { ApiUser } from 'constants/Urls';


class AuthService {
  async login(data: object) {
    const response = await axios.post(ApiUser.login, data);

    if (response.data.data.device_token) {
      localStorage.setItem("user", JSON.stringify(response.data.data));
    }

    return response.data.data;
  }

  async logout() {
    localStorage.removeItem("user");

    return true;
  }

  async register(data: object) { 
    const response = await axios.post(ApiUser.register, data);
 
    return response.data.mensaje;
  }

  getCurrentUser() {
    const userStr = localStorage.getItem("user");
    if (userStr) return JSON.parse(userStr);

    return null;
  }
}

export default new AuthService();
