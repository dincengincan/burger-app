import React from 'react';

function TotalPrice(props) {
    let total=0;
    props.selectedItem.forEach(item => {
        total += item.price;
    })
    
    
    
    return (
        <div className ="Label">
            Total Price: {total} $
        </div>
    )

    
}

export default TotalPrice;