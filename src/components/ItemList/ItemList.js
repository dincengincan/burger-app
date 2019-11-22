import React from 'react';
import {Item}  from "../../components";

function ItemList(props) {
    
    const isThere = props.items.filter(item => {
        return props.selectedItems.some(selectedItem => {
            return item.name === selectedItem.name;
        })
        })

    return (
        <div>
            
            {props.items.map(item => {
                return <Item {...item} key = {item.id}
                        removeItem = {props.removeItem}
                        addItem = {props.addItem}
                        selectedItems = {props.selectedItems}
                        isThere = {isThere.length} />
            })} 
        </div>
    )

    
}

export default ItemList;