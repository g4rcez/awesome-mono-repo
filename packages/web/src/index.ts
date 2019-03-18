import { AppRegistry } from "react-native";
import { appName } from "../../shared/index";
import App from "components/src/App";

AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, {
    rootTag: document.getElementById("root"),
});
