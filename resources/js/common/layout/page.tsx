import { Page } from "@inertiajs/inertia";
import { Head } from "@inertiajs/inertia-react";
import React from "react";

interface PageProps {
  title: any;
}
const PageLayout: React.FC<PageProps> = (props) => {


  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content="Your page description" />
      </Head>
       <div>{props.children}</div>
    </div>
  );
};

export default PageLayout;
