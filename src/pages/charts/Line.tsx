import React from "react";
import { LineChart, Header } from "../../components";
import { Box } from "@mui/material";

const Line: React.FC = () => {

  return (
    <Box m="20px">

      <Header title="Line Chart" subtitle="Simple Line Chart" />

      <Box height="75vh">
        <LineChart />
      </Box>

    </Box>
  );
};

export default Line;