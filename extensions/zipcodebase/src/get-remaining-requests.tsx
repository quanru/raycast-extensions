import { Toast, showToast } from "@raycast/api";
import { getRemainingRequests } from "./utils/api";

export default async function GetRemainingRequests() {
  const response = await getRemainingRequests();

  if ("remaining_requests" in response) {
    await showToast(Toast.Style.Success, "SUCCESS", `Remaining Requests: ${response.remaining_requests}`);
  }
}
