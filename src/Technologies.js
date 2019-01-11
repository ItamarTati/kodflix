import React from 'react'
import Stack from './Stack'
import getTechnologies from './getTechnologies'

export default function Technologies() {
    return (
        <div>
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
        </div>
)
}
