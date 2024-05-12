import Grid from "@mui/material/Grid";
import { CustomCard } from "./components/cards";
import { Box, Container } from "@mui/material";
import { Filter } from "./components/Filters";
import { useFilterContext } from "./contexts/filterContext";
import { useCallback, useEffect, useMemo, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { Loader } from "./components/loader";
import { BsDatabaseFillSlash } from "react-icons/bs";
function App() {
  const { filter_jobs } = useFilterContext();
  const [index, setIndex] = useState(9);
  const [mockApiData, setMockApiData] = useState(filter_jobs.slice(0, index));
  const loadingData = useCallback(() => {
    if (index >= filter_jobs.length) {
      return;
    }
    setTimeout(() => {
      setMockApiData((prev) => [...prev, ...filter_jobs.slice(index, index + 9)]);
      setIndex((prevIndex) => prevIndex + 9);
    }, 1000);
  }, [index, filter_jobs]);
  useEffect(() => {
    setMockApiData(filter_jobs.slice(0, index));
  }, [filter_jobs]);
  return (
    <div style={{ padding: "1rem" }}>
      <Filter />
      {mockApiData.length === 0 ? (
        <Container
          sx={{
            marginTop: "5rem",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
          maxWidth
        >
          <>
            <BsDatabaseFillSlash fontSize={100} />
            <Box fontSize={40} textAlign={"center"} fontFamily={"inherit"}>
              No Jobs available for this category at the moment
            </Box>
          </>
        </Container>
      ) : (
        <Container sx={{ marginTop: "5rem" }} maxWidth>
          {" "}
          <InfiniteScroll
            pageStart={0}
            loadMore={loadingData}
            hasMore={index < filter_jobs.length}
            loader={<Loader key={"loader"} />}
          >
            <Grid container spacing={4}>
              {mockApiData.map((data) => (
                <CustomCard key={data.jdUid} jobDetail={data} />
              ))}
            </Grid>
          </InfiniteScroll>
        </Container>
      )}
    </div>
  );
}

export default App;
