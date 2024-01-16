import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface props {
  platforms: Platform[];
}
const iconMap:{[key:string]:IconType}={
    pc:FaWindows,
    playstation:FaPlaystation,
    xbox:FaXbox,
    nintendo:SiNintendo,
    mac:FaApple,
    linux:FaLinux,
    android:FaAndroid,
    ios:MdPhoneIphone,
    web:BsGlobe
}
const PlatformIconLIst = ({ platforms }: props) => {
  return (
    <HStack marginY={1}>
      {platforms.map((P) => (
        <Icon as={iconMap[P.slug]} color='gray.500'/>
      ))}
    </HStack>
  )
}

export default PlatformIconLIst;
