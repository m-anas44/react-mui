import React from "react";
import ProfileBanner from "../components/Profile/ProfileBanner";
import { teamItems } from "../mockData/teamProfileMockUp";
import PlayerSection from "../components/Profile/PlayerSection";

const Profile = () => {
  return (
    <React.Fragment>
      <ProfileBanner />
      <PlayerSection players={teamItems.Allplayers} />
    </React.Fragment>
  );
};

export default Profile;
