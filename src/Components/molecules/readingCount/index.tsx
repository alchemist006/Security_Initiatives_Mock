import * as React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../../../core-utils/theme";
import colors from "../../../core-utils/colors";
import Icons from "../../atoms/icons";

interface ReadingCountProps {
  heading: string;
  iconImg: string;
  count: number;
}

const useStyles = makeStyles(() => ({
  container: {
    width: `${theme.spacing(68.25)}!important`,
    height: theme.spacing(26),
    background: colors.READ_COUNT_BG,
    borderRadius: theme.spacing(2),
    padding: theme.spacing(0),
    alignItems: "center",
    boxSizing: "border-box",
    margin: theme.spacing(3),
    justifyContent: "center"
  },
}));

const ReadingCount = (props: ReadingCountProps) => {
  const classes = useStyles();
  return (
    <Grid container spacing={2} className={classes.container} data-testid={props.heading} id={props.heading+"id"}>
      <Grid item xs={4}>
        <Box sx={{ margin: theme.spacing(5) }}>
          <Icons icon={props.iconImg} />
        </Box>
      </Grid>
      <Grid item xs={8}>
        <Box>
          <Typography
            variant="caption"
            color="primary.light"
            sx={{ marginTop: theme.spacing(9) }}
          >
            {props.heading}
          </Typography>
          <br></br>
          <Typography variant="h1" color="primary">
            {props.count}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ReadingCount;
