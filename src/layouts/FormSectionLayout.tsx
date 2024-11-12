import * as React from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { IFormSectionLayoutProps } from "./FormSectionLayout.interface";
import "./FormSectionLayout.scss";

function FormSectionLayout(props: IFormSectionLayoutProps) {
  const { title, subTitle, children, className } = props;
  return (
    <Grid
      container
      spacing={3}
      className={`form-section-container ${className}`}
    >
      <Grid
        size={{ sm: 12, md: 3, lg: 5, xl: 3 }}
        className="form-section-left"
      >
        <Box component="section" className="titles-container">
          <Typography className="title" component="div">
            {title}
          </Typography>
          <Typography className="subTitle" component="div">
            {subTitle}
          </Typography>
        </Box>
      </Grid>
      <Grid
        size={{ sm: 12, md: 9, lg: 7, xl: 8 }}
        className="form-section-right"
      >
        {children}
      </Grid>
    </Grid>
  );
}

export default FormSectionLayout;
