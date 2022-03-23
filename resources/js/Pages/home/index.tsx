import React from "react";
import PageLayout from "../../src/common/layout/page";
import Profile from "../../src/components/Profile";
import { ApplicationProvider } from "../../src/providers/application";

const Home = (props: any) => {
  return (
    <PageLayout title={props.title}>
      {props.name ? <div>Welcome, {props.name}!</div> : <Profile />}
    </PageLayout>
  );
};

export default Home;
