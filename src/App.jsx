import Grid from "@mui/material/Grid";
import { CustomCard } from "./components/cards";
import { getSampleJdJSON } from "./data/dummyData";
import { Container } from "@mui/material";
function App() {
  const dummyData = getSampleJdJSON();
  console.log(dummyData.length);
  return (
    <div>
      <Container maxWidth>
        {" "}
        <Grid container spacing={4}>
          {dummyData.map((data) => (
            <CustomCard key={data.jdUid} jobDetail={data} />
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
