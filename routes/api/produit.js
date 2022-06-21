const express = require('express');
const router = express.Router();
const Produit = require('../../models/Produit');
const { check, validationResult } = require('express-validator');

// @route    GET api/produit
// @desc     Get all produits
// @access   Private




  router.get('/:id', async (req, res) => {
    try {
      const product = await Produit.findById(req.params.id);
      res.json(product);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

  router.get('/', async (req, res) => {
    try {
      const products = await Produit.find().sort({ date: -1 });
      res.json(products);
    } catch (err) {
      return res.status(500).json({ msg: "Server error" });
    }
  });



  router.delete('/:id', async (req, res) => {
    try {
      const product = await Produit.findById(req.params.id);
      await product.remove();
      const products = await Produit.find();

      res.json(products);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });
  
  
  
router.post(
    '/',
    [
      check('nom', 'Name is required').notEmpty(),
      check('prixUnitaire', 'Prix Unitaire is required and greater than 0').isInt({ min:1}),
      check('quantite', 'Quantité is required and greater than 0').isInt({ min:1}),
    ], async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      try {

        const newRequest = new Produit({
          nom: req.body.nom,
          prixUnitaire: req.body.prixUnitaire,
          quantite:req.body.quantite,
        });
    
        const myproduct = await newRequest.save();
        
        res.json(myproduct);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );

  router.put('/:id', async (req, res) => {
    try {
      const produit = await Produit.findById(req.params.id);

 if(produit){
    produit.nom= req.body.nom?req.body.nom:produit.nom;
    produit.prixUnitaire=req.body.prixUnitaire?req.body.prixUnitaire:produit.prixUnitaire;
    produit.quantite=req.body.quantite?req.body.quantite:produit.quantite;
 };

await produit.save();
      res.json(produit);
    } catch (err) {
      console.error(err.message);
  
      res.status(500).send('Server Error');
    }
  });
  
  module.exports = router;