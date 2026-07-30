import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Detail() {
  const [recipe, setRecipe] = useState([])
  const API_KEY = 'c27ea4fa89884ccf9c0b10173dbd3a5c'
  const id = useParams().id
  let url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`;


  useEffect(()=>{
    fetch(url)
      .then(res => res.json())
      .then(res => {
        setRecipe(res)
      })

  } ,[])

console.log(recipe);

  return (
    <div>
      id = {id}
    </div>
  )
}

export default Detail