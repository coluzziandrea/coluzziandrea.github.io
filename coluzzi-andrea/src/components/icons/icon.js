import React from "react";
import IconGitHub from "./github";
import IconLinkedin from "./linkedin";
import IconTwitter from "./twitter";
import IconExternal from "./external";
import IconFolder from "./folder";
import IconEmail from "./Email";
import IconProject from "./Project";
import IconProfile from "./Profile";
import IconJob from "./Job";

const Icon = ({ name }) => {
  switch (name) {
    case "Folder":
      return <IconFolder />;
    case "GitHub":
      return <IconGitHub />;
    case "Linkedin":
      return <IconLinkedin />;
    case "Twitter":
      return <IconTwitter />;
    case "Contact":
      return <IconEmail />;
    case "Projects":
      return <IconProject />;
    case "About":
      return <IconProfile />;
    case "Experience":
      return <IconJob />;
    default:
      return <IconExternal />;
  }
};

export default Icon;
