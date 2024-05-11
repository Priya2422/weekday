import Grid from "@mui/material/Grid";
import { CustomCard } from "./components/cards";
function App() {
  return (
    <div>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(6)).map((_, index) => (
          <CustomCard key={index} />
        ))}
      </Grid>
    </div>
  );
}

export default App;
