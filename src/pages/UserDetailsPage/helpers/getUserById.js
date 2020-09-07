import axios from 'axios';

// The function fetch user by ID from site,
// but some of users in redux are saved with ID's from local uuid generator,
// so users with these ID's don't exist on the site.
// That's sometimes server returns random user.
export async function getUserById(userId) {
  try {
    const { data } = await axios.get(`https://randomuser.me/api/?id=${userId}`);
    return data.results[0];
  } catch (error) {
    console.log(error);
  }
}
