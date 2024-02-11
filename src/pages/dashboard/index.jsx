import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";

import { Container } from "./styles";

const Dashboard = () => {
 

  return (
    <Layout onLayout={(x) => x.setBackgroundPadding(false)}>
      <Container>
      </Container>
    </Layout>
  );
};

export default Dashboard;
