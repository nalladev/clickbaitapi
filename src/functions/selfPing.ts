import axios from "axios";

export default function selfPing() {
  axios
    .get(`https://clickbaitapi.onrender.com/`)
    .catch((error) => {
      console.error(error);
    });
}
