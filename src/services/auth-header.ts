export default function authHeader() {
  const userStr = localStorage.getItem("user");
  let user = null;
  if (userStr)
    user = JSON.parse(userStr);

  if (user && user.device_token) {
    return { Authorization: `Bearer ${user.device_token}` };   
  } else {
    return {Authorization: ''};
  }
}