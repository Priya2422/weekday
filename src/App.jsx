import Grid from "@mui/material/Grid";
import { CustomCard } from "./components/cards";
import { Container } from "@mui/material";
import { Filter } from "./components/Filters";
import { useFilterContext } from "./contexts/filterContext";
function App() {
  const {filter_jobs}=useFilterContext();
  return (
    <div>
      <div>
        <Filter />
      </div>
      <Container sx={{ marginTop: "10rem" }} maxWidth>
        {" "}
        <Grid container spacing={4}>
          {filter_jobs.map((data) => (
            <CustomCard key={data.jdUid} jobDetail={data} />
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
