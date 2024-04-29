import { Tab, Tabs } from "@mui/material";
import React from "react";

const createTabsByLength = (length: number) => {
  const tabs = [];
  for (let index = 1; index - 1 < length; index++) {
    tabs.push(<Tab label={index} key={index} value={index} />);
  }
  return tabs;
};
interface IndexTabsProps {
  tabsLength: number;
  value: number;
  onChange: (
    event: React.SyntheticEvent<Element, Event>,
    value: number
  ) => void;
}
const IndexTabs = (props: IndexTabsProps) => {
  const { onChange, tabsLength, value } = props;
  const tabs = createTabsByLength(tabsLength);
  return (
    <Tabs
      variant="scrollable"
      scrollButtons="auto"
      value={value}
      onChange={onChange}
      sx={{ direction: "ltr" }}
    >
      {tabs}
    </Tabs>
  );
};

export default IndexTabs;
