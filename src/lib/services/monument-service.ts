import axios from "axios";
import type { Session, User } from "$lib/types/monument-types";
import type { Monument } from "$lib/types/monument-types";

export const monumentService = {
  baseUrl: "http://localhost:3000",

  async signup(user: User): Promise<boolean> {
    try {
      const response = await axios.post(`${this.baseUrl}/api/users`, user);
      return response.data.success === true;
    } catch (error) {
      console.log(error);
      return false;
    }
  },

  async login(email: string, password: string): Promise<Session | null> {
    try {
      const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, { email, password });
      if (response.data.success) {
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
        const session: Session = {
          name: response.data.name,
          token: response.data.token,
          _id: response.data.id
        };
        return session;
      }
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  async addMonument(monument: Monument, /*locationId: string | null,*/ session: Session) {
    try {
      axios.defaults.headers.common["Authorization"] = "Bearer " + session.token;
      const response = await axios.post(`${this.baseUrl}/api/location/{id}/addmonument`, monument);
      return response.status == 200;
    } catch (error) {
      return false;
    }
  },

  async getMonuments(session: Session): Promise<Monument[]> {
    try {
      axios.defaults.headers.common["Authorization"] = "Bearer " + session.token;
      const response = await axios.get(this.baseUrl + "/api/location/{id}");
      return response.data;
    } catch (error) {
      return [];
    }
  }
};
