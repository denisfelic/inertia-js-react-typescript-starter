import { Page } from "@inertiajs/inertia";
import { Head } from "@inertiajs/inertia-react";
import React, { useContext } from "react";
import { ApplicationContext } from "../../providers/application";

interface PageProps {
  title: any;
}
const PageLayout: React.FC<PageProps> = (props) => {

  const appState = useContext(ApplicationContext);
  console.log(appState);
  
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
