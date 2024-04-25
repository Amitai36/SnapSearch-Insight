import { OrderBySearch } from "../api/images/types";
import SelectComponent from "./SelectComponent";

interface OrderBySearchProps {
  orderBy: OrderBySearch;
  setOrderBySearch: React.Dispatch<React.SetStateAction<OrderBySearch>>;
}

const options: { label: string; optionValue: OrderBySearch }[] = [
  {
    label: "latest",
    optionValue: "latest",
  },
  { label: "views", optionValue: "views" },
  { label: "oldest", optionValue: "oldest" },
  { label: "popular", optionValue: "popular" },
  { label: "downloads", optionValue: "downloads" },
];

function OrderBySearchComponent(props: OrderBySearchProps) {
  const { orderBy, setOrderBySearch } = props;
  return (
    <SelectComponent
      doMoreOnChange={(e) => {
        window.sessionStorage.setItem("orderBy", e.target.value);
      }}
      lable="options"
      setValue={setOrderBySearch}
      value={orderBy}
      options={options}
    />
  );
}

export default OrderBySearchComponent;
