import { HStack, Image } from "@chakra-ui/react";
import newLgo from "../assets/newLgo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
interface prop{
  onSearch:(searchText:string)=>void;

}
const navBar = ({onSearch}:prop) => {
  return (
    <HStack justifyContent="space-between" padding="15px">
      <Image src={newLgo} boxSize="60px" borderRadius={10} pl={0} />
      <SearchInput onSearch={onSearch}/>
      <ColorModeSwitch />
    </HStack>
  );
};

export default navBar;
