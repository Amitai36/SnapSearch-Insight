import { Grid, useMediaQuery } from "@mui/material";
import { Results } from "../api/images/types";
import CardsToDisplayImages from "../components/Cards";
interface ResponsiveCardDisplayProps {
  items: Results[] | [];
}
function ResponsiveCardDisplay(props: ResponsiveCardDisplayProps) {
  const matches730 = useMediaQuery("(min-width:730px)");
  const matches500 = useMediaQuery("(min-width:500px)");
  const { items } = props;

  return (
    <Grid container spacing={2} display={"flex"} justifyContent={"center"}>
      {items.map((res) => {
        return (
          <Grid key={res.id} xs={matches730 ? 4 : matches500 ? 6 : 12} item>
            <CardsToDisplayImages res={res} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default ResponsiveCardDisplay;
