import { HStack, Image } from "@chakra-ui/react"
import newLgo from '../assets/newLgo.png'


const navBar = () => {
  return (
    <HStack>
        <Image src={newLgo}  boxSize='60px' pl={3}/>
    </HStack>
  )
}

export default navBar