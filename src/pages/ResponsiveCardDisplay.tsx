import { Grid, useMediaQuery } from "@mui/material";
import { Results } from "../api/images/types";
import CardsToDisplayImages from "../components/Cards";
import LoaderCard from "../components/LoaderCard";
interface ResponsiveCardDisplayProps {
  items: Results[] | JSX.Element[];
}
function ResponsiveCardDisplay(props: ResponsiveCardDisplayProps) {
  const matches730 = useMediaQuery("(min-width:730px)");
  const matches500 = useMediaQuery("(min-width:500px)");
  const { items } = props;
  return (
    <Grid container display={"flex"} justifyContent={"center"}>
      {items.map((res, index) => {
        return (
          <Grid
            mt={"2%"}
            key={index}
            xs={matches730 ? 4 : matches500 ? 6 : 12}
            item
          >
            {res?.id ? <CardsToDisplayImages res={res} /> : <LoaderCard />}
          </Grid>
        );
      })}
    </Grid>
  );
}

export default ResponsiveCardDisplay;
