import * as React from "react";
import { Box } from "@mui/material";
import HeaderComponent from "../../organisms/header";

interface LandingTemplateProps {
  template: React.ReactNode;
  library:boolean
}

const LandingTemplate = (props: LandingTemplateProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <HeaderComponent isLibrary={props.library} />
      {props.template}
    </Box>
  );
};

export default LandingTemplate;
