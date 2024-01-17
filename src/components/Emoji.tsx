import { Image, ImageProps } from '@chakra-ui/react';
import direct from '../assets/direct-hit.svg'
import thump from '../assets/thumbs-up.svg'

interface props{
    rating:number;
}
const Emoji = ({rating}:props) => {
    if (rating<3) return null;

    const emojiMap: {[key:number]: ImageProps }={
        4:{src:thump,alt:'recommended',boxSize:'23px'},
        5:{src:direct,alt:'exceptional',boxSize:'21px'}
    }
  return (
    <Image {...emojiMap [rating]} marginTop={1}/>
  )
}

export default Emoji