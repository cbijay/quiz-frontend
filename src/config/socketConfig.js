import Echo from "laravel-echo";
window.Pusher = require("pusher-js");

//Laravel Echo config
const AppEcho = (window.Echo = new Echo({
  broadcaster: "pusher",
  key: "myKey",
  wsHost: process.env.REACT_APP_LARAVEL_ECHO_HOST,
  wsPort: process.env.REACT_APP_LARAVEL_ECHO_PORT,
  forceTLS: false,
  disableStats: true,
}));

export default AppEcho;
