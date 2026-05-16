import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashboardScreen from "../screens/DashboardScreen";
import MemberProfileScreen from "../screens/members/MemberProfileScreen";
import MembersListScreen from "../screens/members/MembersListScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { DashboardStackParamList } from "./types";

const Stack = createNativeStackNavigator<DashboardStackParamList>();

const DashboardStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="DashboardHome" component={DashboardScreen} />
    <Stack.Screen name="Notifications" component={NotificationsScreen} />
    <Stack.Screen name="Settings" component={SettingsScreen} />
    <Stack.Screen name="MembersList" component={MembersListScreen} />
    <Stack.Screen name="MemberProfile" component={MemberProfileScreen} />
  </Stack.Navigator>
);

export default DashboardStack;
