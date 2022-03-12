import React from 'react'

function CategoryList(props) {

    const {categories} = props;
  return (
    <>
        <ul>
            {
                categories && categories.map((item, key) => {
                    return(
                        <li>Name: {item.name} Desccription: {item.description}</li>
                    )
                })
            }
        </ul>
    </>   
  )
}

export default CategoryList