import React from 'react';
import ingredients from '../../data';

function Hamburger(props) {
    return (
        <div>
            <div className = "BreadTop" style={{height: "150px"}}>
                
            </div>
            
            {
            props.selectedItem < 1 && <div style={{
                textAlign: "center"
                }}>
                ADD SOME INGREDIENTS !
                </div>
            }
            
            
            
                {props.selectedItem.map(item => {
                    return <div key = {item.displayId} style= {{
                       height: "20px",
                       backgroundColor: item.color,
                       width: "40%",
                       margin: "0 auto",
                       marginTop: "10px"
                    }}></div>
                })}
            

        
            <div className = "BreadBottom" style={{height: "100px"}}>
                
            </div>
            
        </div>
    )

    
}

export default Hamburger;