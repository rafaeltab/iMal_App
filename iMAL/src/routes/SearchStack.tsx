import { createStackNavigator } from "@react-navigation/stack";
import Search from "./MainScreens/SearchScreen";
import AnimeDetails from "./MainScreens/AnimeDetails";
import { Colors } from "../Configuration/Colors";
import { AnimeNode } from "../APIManager/ApiBasicTypes";
import React from "react";

export type SearchStackParamList = {
    Search: undefined;
    Details: {
        item: AnimeNode;
    };
};

const Stack = createStackNavigator();
export default function SearchStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="Search">
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="Details" component={AnimeDetails} />
        </Stack.Navigator>
    );
}