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
    <Grid container spacing={2} width={"100%"}>
      {items.map((res, index) => {
        return (
          <Grid
            key={index}
            xs={matches730 ? 4 : matches500 ? 6 : 12}
            item
            width={"100%"}
          >
            {res && "id" in res ? (
              <CardsToDisplayImages res={res} />
            ) : (
              <LoaderCard />
            )}
          </Grid>
        );
      })}
    </Grid>
  );
}

export default ResponsiveCardDisplay;
