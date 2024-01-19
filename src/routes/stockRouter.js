import express from "express";
import { getAllStock,getAllFavorite,getStockByName,removeFavorite,getStockforUi, addFavorite } from "../Controller/stockController.js";

const router=express.Router();


router.get('/getStocks',getAllStock);
router.get('/stockByName',getStockByName);
router.get('/uigraph',getStockforUi);
router.post('/addFavorite/:user_id',addFavorite);
router.get('/allFavorite/:user_id',getAllFavorite);
router.get('/removeFromFavorite',removeFavorite);

export default router;