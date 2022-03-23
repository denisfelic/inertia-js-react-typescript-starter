import React from "react";
import PageLayout from "../../common/layout/page";

const Home = (props: any) => {
  return (
    <PageLayout title={props.title}>
      {props.name && <div>Welcome, {props.name}!</div>}
    </PageLayout>
  );
};

export default Home;
