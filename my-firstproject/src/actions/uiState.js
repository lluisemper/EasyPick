//DESCRIVES WHAT ARE YOU GONNA DO

export const mySearchAction = (searchInput) => {
  return{
    type: 'SEARCH',
    searchInput
  }
} 

export const myTagSelection = (pickTag) => {
  return {
    type: 'MYTAG',
    pickTag
  }
}

export const myRecipeRender = (recipes) => {
  return {
    type: 'MYRECIPERENDER',
    recipes
  }
}