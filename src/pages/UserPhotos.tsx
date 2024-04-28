import { Avatar, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useQueryUserPhotos } from "../api/images/query";
import ResponsiveCardDisplay from "./ResponsiveCardDisplay";

export default function UserPhotos() {
  const { name } = useParams();
  const { data, isLoading } = useQueryUserPhotos({ name: name as string });
  const user = data && data[0]?.user;

  return (
    <div style={{ width: "100%" }}>
      {isLoading || !data ? (
        <Typography>Loading</Typography>
      ) : (
        <>
          <Stack>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Avatar
                sx={{ width: 100, height: 100 }}
                src={user?.profile_image.large}
              />
              <Typography component="span" variant="h5" marginInline={"2%"}>
                {user?.last_name ?? "" + user?.first_name ?? ""}
              </Typography>
            </div>
            <ResponsiveCardDisplay items={data} />
          </Stack>
        </>
      )}
    </div>
  );
}
