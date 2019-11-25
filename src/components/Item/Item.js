import React from 'react';
// onClick kısmında neden onClick={props.addItem(props)} yazmadık ? Todolistte farkı yoktu ama burda arrow kullanmayınca çalışmıyor
function Item(props) {
    return (
        <div className = "BuildControl">
            <div className = "Label">
                {props.name}
                
            </div>
            <div>
                {props.howMany}
            </div> 
            
                <button onClick= {() => props.addItem(props)} >Add</button>

    
                {
                    props.isThere 
                    ? <button className="Less" style={{width: "110px"}} onClick= {props.removeItem}>RemoveOne</button>
                    : <button className="Less disabled" style={{width: "110px"}} onClick= {props.removeItem}>RemoveOne</button>
                }

{
                    props.isThere 
                    ? <button className="Less" style={{width: "110px"}} onClick= {props.removeItem}>RemoveAll</button>
                    : <button className="Less disabled" style={{width: "110px"}} onClick= {props.removeItem}>RemoveAll</button>
                }
                
                
                

                
                
            
        </div>
    )

    
}


export default Item;