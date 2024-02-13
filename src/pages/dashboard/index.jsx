import React, { useState, useEffect } from "react";
import api from '../../services/api';

import Layout from "../../components/layout";

import { Container } from "./styles";

const Dashboard = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/";
    }
  }, []);

  return (
    <Layout onLayout={(x) => x.setBackgroundPadding(false)}>
      <Container>
      </Container>
    </Layout>
  );
};

export default Dashboard;
