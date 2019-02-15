import React from 'react'
import Stack from './Stack'
import getTechnologies from './getTechnologies'
import Header from './Header'

export default function Technologies() {
    return ( 
        <div>
            <div>
        {
        <Header />
        }  
            </div>
            
                
            <section id='animes'>
                <div className = 'container'>
                {
                    getTechnologies().map(stack => 
                    <Stack 
                        key={stack.id}
                        id={stack.id}
                        name={stack.name}
                        logo={stack.logo}
                        />
                    )
                }
                </div>
            </section>   
                
        </div>
        
)
}
