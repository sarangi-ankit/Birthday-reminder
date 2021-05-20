import React from 'react'


function List({people}) {
    return (
    <>
    {people.map((person)=>{
    const {id,image,name,age}=person
    return(
        <article key={id} className="person">
            <img src={image} />
            <h3>{name}</h3> <br />
            <p>{age} years old</p>
        </article>
    )
        
})}
    
    </>
        
    )
}

export default List
