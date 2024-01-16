import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface props{
    onSelectSortOrder:(sortOrder:string)=> void;
}
const SortSelector = ({onSelectSortOrder}:props) => {
    const sortOrders=[
        {value:'-added',label:'relevance'},
        {value:'name',label:'date added'},
        {value:'-released',label:'name'},
        {value:'-metacritic',label:'popularity'},
        {value:'-rating',label:'everage rating'},

    ]
    
    return (
     <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
         Order by: Relevance
      </MenuButton>
      <MenuList>
      {sortOrders.map(order=> <MenuItem  onClick={()=>onSelectSortOrder(order.value)} key={order.value} value={order.value}>{order.label}</MenuItem>)}
      </MenuList>
     </Menu>
    )
  }


export default SortSelector