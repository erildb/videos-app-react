import axios from "axios";

const KEY = "AIzaSyCQfxxW-8WWptKyGEXceRCf9NFE0_mBsd8";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
