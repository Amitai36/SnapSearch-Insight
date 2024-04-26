import { Button, Grid, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
interface TabsProps {
  tabs: number[];
  value: number;
  onChange: (event: React.SyntheticEvent<Element, Event>, value: any) => void;
}
const TabComponent = (props: TabsProps) => {
  const { tabs, onChange, value } = props;
  const [currentPage, setCurrentPage] = useState(0);
  const tabsPerPage = 10; // You can adjust this value based on your preference

  const totalPages = Math.ceil(tabs.length / tabsPerPage);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const renderTabs = () => {
    const startIndex = currentPage * tabsPerPage;
    const endIndex = Math.min(startIndex + tabsPerPage, tabs.length);
    const currentTabs = tabs.slice(startIndex, endIndex);

    return (
      <Tabs value={value} onChange={onChange}>
        {currentTabs.map((tab, index) => (
          <Tab key={index} label={tab} />
        ))}
      </Tabs>
    );
  };

  return (
    <div>
      <Grid container spacing={2} alignItems={"center"}>
        <Grid item xs={1}>
          <Button
            disabled={currentPage === 0}
            // onClick={() => handlePageChange(currentPage - 1)}
          >
            <ArrowBackIosNewIcon />
          </Button>
        </Grid>
        <Grid item xs={10}>
          {renderTabs()}
        </Grid>
        <Grid item xs={1}>
          <div>
            <Button
              disabled={currentPage === totalPages - 1}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              <ArrowForwardIosIcon />
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
interface IndexTabsProps {
  tabsLength: number;
  value: number;
  onChange: (event: React.SyntheticEvent<Element, Event>, value: any) => void;
}
// Example usage
const IndexTabs = (props: IndexTabsProps) => {
  const { onChange, tabsLength, value } = props;
  // Generate sample index tabs from 1 to 1000
  const tabs = Array.from({ length: tabsLength }, (_, index) => index + 1);

  return <TabComponent onChange={onChange} value={value} tabs={tabs} />;
};

export default IndexTabs;
