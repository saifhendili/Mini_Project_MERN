import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { addProduct } from '../../actions/produit';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
function AddProduct({addProduct}) {
    const [nom, setnom] = useState('');
    const [prixUnitaire, setprixUnitaire] = useState('');
    const [quantite, setquantite] = useState('');

  return (
    <div class="app-container">


    <div class="app-main" id="main">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12 m-b-30">
                <div class="d-block d-sm-flex flex-nowrap align-items-center">
                    <div class="page-title mb-2 mb-sm-0">
                        <h1>Produits</h1>
                    </div>
                    <div class="ml-auto d-flex align-items-center">
                            <div>
                              <Link to="/">  <div class="btn btn-primary">
                                        Liste Produit
                                </div></Link>
                            </div>
                        </div>
                </div>
            </div>
        </div>
       
        <div class="row">
            <div class="col-12">
                <div class="card card-statistics clients-contant">
                    <div class="card-header">
                        <div class="d-xxs-flex justify-content-between align-items-center">
                            <div class="card-heading">
                                <h4 class="card-title">Produits</h4>
                            </div>
                           
                        </div>
                    </div>
                    <div class="card-body py-0 table-responsive">
                    
<form onSubmit={async(e) => {
          e.preventDefault();
       await   addProduct({nom,quantite,prixUnitaire });  
       setnom("")
       setquantite("")
       setprixUnitaire("")
           }}>
  <div class="form-group">
    <label for="exampleInputEmail1">Nom</label>
    <input type="text" class="form-control"  name='nom' onChange={(e)=>setnom(e.target.value)}value={nom} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="nom"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Quantité</label>
    <input type="number" class="form-control" name='quantite' onChange={(e)=>setquantite(e.target.value)} value={quantite}id="exampleInputPassword1" placeholder="Quantité"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Prix Unitaire</label>
    <input type="number" class="form-control" name='prixUnitaire' onChange={(e)=>setprixUnitaire(e.target.value)}value={prixUnitaire} id="exampleInputPassword1" placeholder="Prix Unitaire"/>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
                    </div>
                </div>
            </div>
        </div>
    
    </div>
    
    </div>
    </div>  )
}

AddProduct.propTypes = {
    addProduct: PropTypes.func.isRequired,
  };
  
  export default connect(null, { addProduct })(AddProduct);

