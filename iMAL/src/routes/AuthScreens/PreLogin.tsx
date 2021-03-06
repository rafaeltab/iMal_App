import React from "react";
import { Dimensions, View } from "react-native";
import Kurabu from "../../../assets/pinklogin.svg";
import Auth from "../../APIManager/Authenticate";
import * as RootNavigator from "../RootNavigator";
import { DoSwitch } from "../RootNavigator";

//uncomment to reset saved uuid and go into developer mode for the Auth system
//Auth.devMode = true;
//Auth.ClearAsync();

class PreLogin extends React.Component<any> {
    constructor(props: any) {
        super(props);

        Auth.getInstance().then((auth) => {
            if (auth.getLoaded()) {
                DoSwitch("Drawer");
            } else {
                RootNavigator.navigate("Login", undefined);
            }
        });
    }

    render() {
        return (
            <View
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    height: Dimensions.get("window").height,
                    backgroundColor: "#1a1a1a",
                }}>
                <Kurabu
                    height={Dimensions.get("window").height * 1.5}
                    width={Dimensions.get("window").width * 3}
                    preserveAspectRatio="xMinYMin slice"
                    style={{
                        position: "absolute",
                    }}
                />
            </View>
        );
    }
}

export default PreLogin;
