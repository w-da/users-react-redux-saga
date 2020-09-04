import axios from 'axios';

export async function getUserById(userId) {
  try {
    const { data } = await axios.get(`https://randomuser.me/api/?id=${userId}`);
    return data.results[0];
  } catch (error) {
    console.log(error);
  }
}
