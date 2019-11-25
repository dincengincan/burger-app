import React from 'react';
import {Item}  from "../../components";

function ItemList(props) {
    
    /*const isThere = props.items.filter(item => {
        return props.selectedItems.some(selectedItem => {
            return item.name === selectedItem.name;
        })
        })*/

    return (
        <div>
            
            {props.items.map(item => {
                
                const howMany = props.selectedItems.filter(selectedItem => {
                    return item.name === selectedItem.name;
                })

                const isThere = props.selectedItems.find(selectedItem => {
                    return item.name === selectedItem.name;
                
                })
                
                
                return <Item {...item} key = {item.id}
                        removeItem = {props.removeItem}
                        addItem = {props.addItem}
                        selectedItems = {props.selectedItems}
                        howMany = {howMany.length}
                        isThere = {isThere} />
            })} 
        </div>
    )

    
}

export default ItemList;