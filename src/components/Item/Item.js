import React from 'react';
// onClick kısmında neden onClick={props.addItem(props)} yazmadık ? Todolistte farkı yoktu ama burda arrow kullanmayınca çalışmıyor
function Item(props) {
    return (
        <div className = "BuildControl">
            <div className = "Label">
                {props.name}
                
            </div>
            <div>
                {props.isThere}
            </div> 
            
                <button onClick= {() => props.addItem(props)} >Add</button>

                <button className="Less" onClick= {props.removeItem}>Remove</button>
                
            
        </div>
    )

    
}


export default Item;