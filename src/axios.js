import axios from "axios";

/** base url to make request to the movie database 
 * basically it shrtens the url u need to add as a parameter
 * by adding the base url first...always
*/

const instance = axios.create({
     baseURL: "https://api.themoviedb.org/3"
});

export default instance;