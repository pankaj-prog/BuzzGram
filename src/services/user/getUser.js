import axios from "axios";
import { toast } from "react-toastify";

export const getUser = async ({ username, setCurrentProfileUser }) => {
  try {
    const res = await axios.get(`/api/users/${username}`);
    setCurrentProfileUser(res.data.user);
  } catch (e) {
    toast.error(e.response.errors);
  }
};
