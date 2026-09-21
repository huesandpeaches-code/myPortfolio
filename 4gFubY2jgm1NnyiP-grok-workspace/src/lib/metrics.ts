export type MetricRow = {
  name: string;
  meaning: string;
};

export type MetricGroup = {
  title: string;
  question: string;
  rows: MetricRow[];
};

export const METRIC_GROUPS: MetricGroup[] = [
  {
    title: "Delivery and reach",
    question: "Did the ads show, and to how many people?",
    rows: [
      { name: "Impressions", meaning: "How many times the ad was shown. The same person can count more than once." },
      { name: "Reach", meaning: "How many unique people saw the ad at least once." },
      { name: "Frequency", meaning: "Average times each person saw the ad (impressions ÷ reach). High frequency can mean fatigue." },
      { name: "Delivery", meaning: "Whether the campaign is active, limited, or not delivering." },
    ],
  },
  {
    title: "Cost",
    question: "How much did we spend, and at what rate?",
    rows: [
      { name: "Amount spent", meaning: "Total money used in the date range." },
      { name: "CPM", meaning: "Cost per 1,000 impressions. Useful for awareness." },
      { name: "CPC", meaning: "Average cost each time someone clicks." },
      { name: "Cost per result", meaning: "Cost for the campaign’s chosen result (lead, purchase, and so on)." },
    ],
  },
  {
    title: "Engagement",
    question: "Did people interact?",
    rows: [
      { name: "Link clicks", meaning: "Clicks that go to the destination URL. The useful click for traffic and sales." },
      { name: "CTR", meaning: "Share of impressions that became clicks. Higher often means the ad is more relevant." },
      { name: "Landing page views", meaning: "The page actually loaded after the click. Stricter than link clicks." },
      { name: "ThruPlays / video views", meaning: "People who watched video to a set point, such as 15 seconds." },
    ],
  },
  {
    title: "Results",
    question: "Did the ad drive the action the client wants?",
    rows: [
      { name: "Results", meaning: "Times the optimization event happened." },
      { name: "Purchases / leads", meaning: "Completed buys or form fills attributed to the ads." },
      { name: "ROAS", meaning: "Revenue attributed ÷ ad spend. 3.0 means $3 back per $1 spent." },
      { name: "Purchase value", meaning: "Revenue tracked from purchases, if the pixel is working." },
    ],
  },
];

export const GOAL_FOCUS = [
  { goal: "Awareness", focus: "Reach, impressions, CPM, frequency" },
  { goal: "Traffic", focus: "Link clicks, CPC, CTR, landing page views" },
  { goal: "Leads", focus: "Leads, cost per lead, CTR" },
  { goal: "Sales", focus: "Purchases, ROAS, cost per purchase" },
];
