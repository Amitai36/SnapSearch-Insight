import CarouselComponent from "../../components/Carousel";
import Search from "../../components/Search";
import searchImage from "../../../public/images/searchImages.png";
import seeMoreOnMap from "../../../public/images/see_on_map.png";
import seePhotoStatistics from "../../../public/images/see_photo_statistics.png";
import seeUserStatistics from "../../../public/images/see_user_statistics.png";
import showMorePhotoFromArtist from "../../../public/images/show_more_photo_from_artist.png";
import { useTranslation } from "react-i18next";

function SearchToDisplay() {

  const { t } = useTranslation();
  const photos: { lable: string; imgSrc: string }[] = [
    { imgSrc: searchImage, lable: t("searchImage") },
    { imgSrc: seeMoreOnMap, lable: t("seeMoreOnMap") },
    { imgSrc: showMorePhotoFromArtist, lable: t("showMorePhotoFromArtist") },
    { imgSrc: seeUserStatistics, lable: t("seeUserStatistics") },
    { imgSrc: seePhotoStatistics, lable: t("seePhotoStatistics") },
  ];
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ height: "20%" }}>
        <Search />
      </div>
      <div
        style={{
          direction: "ltr",
          height: "60%",
          maxHeight: "60%",
          width: "60%",
        }}
      >
        <CarouselComponent photos={photos} />
      </div>
    </div>
  );
}

export default SearchToDisplay;
