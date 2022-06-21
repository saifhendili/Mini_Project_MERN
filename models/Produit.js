const mongoose = require('mongoose');

const ProduitSchema = new mongoose.Schema({
 
    nom: {
    type: String,
    required:true
  },
  prixUnitaire: {
    type: Number,
    required:true

  },
  quantite: {
    type: Number,
    required:true
  },
  date: {
    type: Date,
    default:Date.now()
  },
});

module.exports = Produit = mongoose.model('produit', ProduitSchema);