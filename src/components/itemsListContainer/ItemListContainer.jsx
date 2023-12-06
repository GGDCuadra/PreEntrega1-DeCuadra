import React from 'react'

function ItemListContainer({greeting}) {
  return (
    <div className="text-center">
      <h1 className="text-8xl">{greeting}</h1>
    </div>
  )
}

export default ItemListContainer