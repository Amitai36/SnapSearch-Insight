import { OrderBySearch } from "../api/images/types";
import SelectComponent from "./SelectComponent";
import { useTranslation } from "react-i18next";

interface OrderBySearchProps {
  orderBy: OrderBySearch;
  setOrderBySearch: React.Dispatch<React.SetStateAction<OrderBySearch>>;
}

function OrderBySearchComponent(props: OrderBySearchProps) {
  const { t } = useTranslation();
  const options: { label: string; optionValue: OrderBySearch }[] = [
    {
      label: t("latest"),
      optionValue: "latest",
    },
    { label: t("views"), optionValue: "views" },
    { label: t("oldest"), optionValue: "oldest" },
    { label: t("popular"), optionValue: "popular" },
    { label: t("downloads"), optionValue: "downloads" },
  ];
  const option = t("optionSearch");
  const { orderBy, setOrderBySearch } = props;
  return (
    <SelectComponent
      lable={option}
      setValue={setOrderBySearch}
      value={orderBy}
      options={options}
    />
  );
}

export default OrderBySearchComponent;
