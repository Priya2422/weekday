import { Button, Card, CardActions, CardContent, Grid, Stack, Typography } from "@mui/material";
import { memo, useEffect, useState } from "react";
import "./cards.css";
const CustomCardComponent = ({ jobDetail }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleTextFade = () => {
    setIsExpanded((prev) => !prev);
  };
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card variant="outlined" sx={{ padding: 2 }}>
        <CardContent>
          <Grid item container direction="row" gap={1} alignItems={"flex-start"}>
            <img src={jobDetail.logoUrl} alt={jobDetail.companyName} className="logo" />
            <Stack spacing={0}>
              <Typography
                marginBottom={0}
                sx={{ fontSize: 15, fontFamily: "inherit" }}
                color="grey"
                gutterBottom
              >
                {jobDetail.companyName}
              </Typography>
              <Typography
                color="text.secondary"
                variant="h6"
                fontFamily={"inherit"}
                component="div"
                className="metaData"
              >
                {jobDetail.jobRole}
              </Typography>
              <Typography
                sx={{ mb: 1.5, fontSize: 13 }}
                color="text.secondary"
                className="metaData"
                fontFamily={"inherit"}
              >
                {jobDetail.location}
              </Typography>
            </Stack>
          </Grid>

          {!jobDetail.minJdSalary && !jobDetail.maxJdSalary ? (
            <Typography variant="body1" fontFamily={"inherit"}>
              Estimated Salary: Not Mentioned
            </Typography>
          ) : (
            <Typography variant="body1" fontFamily={"inherit"}>
              Estimated Salary: {jobDetail.salaryCurrencyCode}{" "}
              {jobDetail.minJdSalary && jobDetail.maxJdSalary ? (
                <>
                  <span>{jobDetail.minJdSalary}</span>
                  {" - "}
                  <span>{jobDetail.maxJdSalary}</span>
                </>
              ) : jobDetail.maxJdSalary ? (
                jobDetail.maxJdSalary
              ) : (
                jobDetail.minJdSalary
              )}
              {" LPA"}
            </Typography>
          )}
          <Stack>
            <Typography variant="subtitle1" fontFamily={"inherit"}>
              Job Description:
            </Typography>
            <Typography
              variant="body1"
              fontFamily={"inherit"}
              className={`${isExpanded ? "expanded" : "collapsed"} job-description`}
            >
              {jobDetail.jobDetailsFromCompany}
            </Typography>
            <Button size="small" onClick={handleTextFade} sx={{ fontFamily: "inherit" }}>
              View More
            </Button>
          </Stack>
          {!jobDetail.minExp && !jobDetail.maxExp ? (
            <Stack>
              <Typography variant="subtitle1" fontFamily={"inherit"}>
                Experience Required:
              </Typography>
              <Typography variant="body1" fontFamily={"inherit"}>
                Not Mentioned
              </Typography>
            </Stack>
          ) : (
            <Stack>
              <Typography variant="subtitle1" fontFamily={"inherit"}>
                Experience Required:
              </Typography>

              <Typography variant="body2" fontFamily={"inherit"}>
                {" "}
                {jobDetail.minExp && jobDetail.maxExp ? (
                  <>
                    <span>{jobDetail.minExp}</span>
                    {" - "}
                    <span>{jobDetail.maxExp}</span>
                  </>
                ) : jobDetail.maxExp ? (
                  jobDetail.maxExp
                ) : (
                  jobDetail.minExp
                )}
                {" years"}
              </Typography>
            </Stack>
          )}
        </CardContent>
        <CardActions>
          <Button
            size="small"
            variant="contained"
            fullWidth
            sx={{
              height: "2.5rem",
              backgroundColor: "#54efc3",
              color: "black",
              fontSize: "1rem",
              fontFamily: "inherit",
            }}
          >
            Easy Apply
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export const CustomCard = memo(CustomCardComponent);
