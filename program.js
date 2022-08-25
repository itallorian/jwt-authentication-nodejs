import startup from "./src/startup.js";
import config from "config";

const port = process.env.PORT || config.get("port");
startup.listen(port);