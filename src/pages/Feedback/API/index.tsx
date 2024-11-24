import axios from "axios";
import { SUBMIT_USER_FEEDBACK } from "./APIUrl";

export const submitFeedbackApi = async (payload: any) => {
  const url = SUBMIT_USER_FEEDBACK;
  // .replace("{userId}", payload.userId || "");
  try {
    await axios.post(url, payload);
  } catch (e) {
    alert({ Error: e });
  }
};
