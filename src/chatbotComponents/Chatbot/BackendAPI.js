import axios from 'axios';

class BackendAPI {
  async fetchEvents() {
    try {
      const response = await axios.get('http://localhost:5173/');
      return response.data;
    } catch (error) {
      console.error('Error fetching events:', error);
      return [];
    }
  }
}

export default BackendAPI;
