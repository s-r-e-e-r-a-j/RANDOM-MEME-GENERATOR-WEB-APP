  
const image=document.querySelector("#meme")
const btn=document.querySelector("#btn")
const link=document.querySelector("#link")
btn.addEventListener("click",async()=>{

  try{
   

  let api=" https://meme-api.com/gimme"
 let response=await fetch(api);
 let data=await response.json();
 image.style.display="block"
 image.src=data.url

  }catch(error){

  console.log("Error Occured")

  }



})
