import { NavigatorScreenParams } from "@react-navigation/native";

export type AuthStackParamList = {
  Splash: undefined;
  Login: undefined;
};

export type EventsStackParamList = {
  EventsList: undefined;
  EventDetail: { eventId: string };
};

export type VotingStackParamList = {
  VotingHub: undefined;
  PollVote: { pollId: string };
  ElectionBallot: { electionId: string };
};

export type FinanceStackParamList = {
  FinanceAdmin: undefined;
  MyLedger: { memberId?: string } | undefined;
};

export type DashboardStackParamList = {
  DashboardHome: undefined;
  Notifications: undefined;
  Settings: undefined;
  MembersList: undefined;
  MemberProfile: { memberId: string };
};

export type MarketStackParamList = {
  Marketplace: undefined;
};

export type AppTabParamList = {
  Dashboard: NavigatorScreenParams<DashboardStackParamList>;
  Events: NavigatorScreenParams<EventsStackParamList>;
  Voting: NavigatorScreenParams<VotingStackParamList>;
  Finance: NavigatorScreenParams<FinanceStackParamList>;
  Market: NavigatorScreenParams<MarketStackParamList>;
};
