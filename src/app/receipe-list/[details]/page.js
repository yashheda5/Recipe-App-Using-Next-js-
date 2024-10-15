import RecipeDetailsItem from '@/components/receipe-details';
import React from 'react'

async function fetchRecipeDetails(currentRecipeID){
  try{
    const apiResponse =await fetch(`https://dummyjson.com/recipes/${currentRecipeID}`);
    const data=await apiResponse.json();
    return data;
  } catch(e){
    throw new Error(e);
  }
}
export default async function page({params}) {
  const getRecipeDetails=await fetchRecipeDetails(params?.details)
  return (
    <RecipeDetailsItem getRecipeDetails={getRecipeDetails}/>
    
  )
}
