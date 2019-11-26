import React from 'react';
import {Item}  from "../../components";

function ItemList(props) {

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
                        removeAllItems = {props.removeAllItems}
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