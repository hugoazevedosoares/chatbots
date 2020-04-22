export interface UserAnalytics {
  total: number;
  actived: number;
}

export interface MessageAnalytics {
  received: number;
  sent: number;
}

export interface Analytics {
  user: UserAnalytics;
  message: MessageAnalytics;
}
