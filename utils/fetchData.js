export async function getCategory(category){
  const response = await fetch(`http://localhost:4000/${category}`, {
    next: {
      revalidate: 0
    }
  });
  const data = await response.json();

  if(response.ok){
    return data;
  }
  else{
    console.log(data);
  }
};