import React, { useContext } from "react";
import { ApplicationContext } from "../providers/application";

const Profile: React.FC = (props) => {
  const { appState } = useContext(ApplicationContext);

  return <div>Welcome, {appState.username} </div>;
};

export default Profile;
