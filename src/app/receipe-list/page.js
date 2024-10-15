import React from 'react'
import ReceipeList from "@/components/receipe-list"
async function fetchListOfRecepies(){
  try{
    const apiResponse =await fetch('https://dummyjson.com/recipes');
    const data = await apiResponse.json();
    return data?.recipes;
  } catch(error){
    throw new Error(e);
  }
}

export default async function page() {
  const someData =await fetchListOfRecepies();
  // console.log(receipeList)
  return (
    <div>
    
<ReceipeList recipeList={someData} />

    </div>
    
  )
}
