import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import usePlatforms from "../hooks/usePlatforms"
import { Platform } from "../hooks/useGames"

interface props{
    onSelectePlatform:(platform:Platform)=>void;
    selectedPlatform:Platform|null;
}
const PlatformSelector = ({onSelectePlatform,selectedPlatform}:props) => {
    const{data,error}=usePlatforms()

    if(error) return null;
  return (
   <Menu>
    <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
        {selectedPlatform?.name||'platform'}
    </MenuButton>
    <MenuList>
    {data.map(platform=><MenuItem  onClick={()=>onSelectePlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
    </MenuList>
   </Menu>
  )
}

export default PlatformSelector