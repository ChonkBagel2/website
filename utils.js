function reorderHTML() { 

    // """ JavaScript function to reorder HTML when screen width < 768px """ 

    let width = window.innerWidth; 
    const cards = document.querySelectorAll('.card'); 


    if ( width <= 768 && firstResize === true ) { 

        // Go through each card and remove the img tag from DOM 
        cards.forEach( function ( card ) { 
    
            const imgTag = card.children[ 1 ]; 
            const cardDesc = card.children[ 0 ]; 
    
            cardDesc.insertBefore( imgTag, cardDesc.children[ 1 ] ); 
        }); 

        firstResize = false; 
    } 
    else { 

        if ( firstResize === false && width > 768 ) {

            cards.forEach( function ( card ) { 

                const cardDesc = card.children[ 0 ]; 
                const imgTag = cardDesc.children[ 1 ]; 

                card.appendChild( cardDesc ); 
                card.appendChild( imgTag ); 
            }); 

            firstResize = true; 
        }
    }

}

let firstResize = true; 


window.addEventListener( 'resize', reorderHTML ); 
reorderHTML(); 

























