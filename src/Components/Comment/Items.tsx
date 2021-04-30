import { FC } from "react";
import Item from "./Item";

interface item {
  userName: string;
  createDate: string;
  logo: string;
  text: string;
  answer?: string;
  id: number;
}
interface Props {
  Items: item[];
}
const Items: FC<Props> = (props) => {
  return (
    <>
      {props.Items.map((c: item, idx: number) => (
        <Item {...c} key={idx} />
      ))}
    </>
  );
};

export default Items;
