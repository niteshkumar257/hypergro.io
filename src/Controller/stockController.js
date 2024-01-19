
const getAllStock=(req,res)=>{
    console.log(req);
}
const getStockByName=(req,res)=>{
    console.log(req);
}
const getStockforUi=(req,res)=>{


}
const addFavorite=(req,res)=>{
    console.log("add favorite");
}
const getAllFavorite=(req,res)=>{
    console.log("getAllfavorite");
}

const removeFavorite=(req,res)=>{
    console.log("remove favorite");
}
export {
    getAllStock,getAllFavorite,getStockByName,addFavorite,removeFavorite,getStockforUi
}