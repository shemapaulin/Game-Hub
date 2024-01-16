import { HStack, Image } from "@chakra-ui/react"
import newLgo from '../assets/newLgo.png'
import ColorModeSwitch from "./ColorModeSwitch"



const navBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
        <Image src={newLgo}  boxSize='60px' borderRadius={6} pl={3}/>
        <ColorModeSwitch/>
    </HStack>
  )
}

export default navBar