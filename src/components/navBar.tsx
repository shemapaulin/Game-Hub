import { HStack, Image } from "@chakra-ui/react";
import newLgo from "../assets/newLgo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
interface prop{
  onSearch:(searchText:string)=>void;

}
const navBar = ({onSearch}:prop) => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={newLgo} boxSize="60px" borderRadius={6} pl={3} />
      <SearchInput onSearch={onSearch}/>
      <ColorModeSwitch />
    </HStack>
  );
};

export default navBar;
