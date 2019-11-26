import React from 'react';
// onClick kısmında neden onClick={props.addItem(props)} yazmadık ? Todolistte farkı yoktu ama burda arrow kullanmayınca çalışmıyor
function Item(props) {
    
    return (
        <div className = "BuildControl">
            <div className = "Label">
                {props.name}
                
            </div>
            <div>
                {props.howMany * props.price } $
            </div> 
            <div>
                {props.howMany}
            </div> 
            
                <button onClick= {() => props.addItem(props)} >Add</button>

    
                {
                    props.isThere 
                    ? <button className="Less"  onClick= {() => props.removeItem(props)}>Remove</button>
                    : <button className="Less disabled" >Remove</button>
                }

{
                    props.isThere 
                    ? <button className="Less"  onClick= {() => props.removeAllItems(props)}>Reset</button>
                    : <button className="Less disabled" >Reset</button>
                }
                
                
                

                
                
            
        </div>
    )

    
}


export default Item;