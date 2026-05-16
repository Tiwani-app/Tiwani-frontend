import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "../components/common/FeatherIcon";
import DashboardStack from "./DashboardStack";
import EventsStack from "./EventsStack";
import FinanceStack from "./FinanceStack";
import MarketStack from "./MarketStack";
import VotingStack from "./VotingStack";
import { colors } from "../theme";
import { AppTabParamList } from "./types";

const Tab = createBottomTabNavigator<AppTabParamList>();

const AppNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarStyle: {
        backgroundColor: colors.bg.secondary,
        borderTopColor: colors.border.subtle,
        paddingBottom: 6,
        height: 60,
      },
      tabBarActiveTintColor: colors.gold.default,
      tabBarInactiveTintColor: colors.text.tertiary,
      tabBarLabelStyle: { fontSize: 10, fontWeight: "500" },
      tabBarLabel: {
        Dashboard: "Home",
        Events: "Events",
        Voting: "Vote",
        Finance: "Finance",
        Market: "Market",
      }[route.name],
      tabBarIcon: ({ color, size }) => {
        const icons: Record<keyof AppTabParamList, string> = {
          Dashboard: "home",
          Events: "calendar",
          Voting: "check-circle",
          Finance: "credit-card",
          Market: "shopping-bag",
        };
        return <Icon name={icons[route.name]} size={size - 2} color={color} />;
      },
    })}
  >
    <Tab.Screen name="Dashboard" component={DashboardStack} />
    <Tab.Screen name="Events" component={EventsStack} />
    <Tab.Screen name="Voting" component={VotingStack} />
    <Tab.Screen name="Finance" component={FinanceStack} />
    <Tab.Screen name="Market" component={MarketStack} />
  </Tab.Navigator>
);

export default AppNavigator;
