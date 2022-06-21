import React,{useEffect,Fragment} from 'react'
import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { getProduct } from '../../actions/produit';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../Layout/Spinner';
import ProductItem from './ProductItem';

function ShowDetails({getProduct,produit:{loading,produit}}) {
  const [searchParams] = useSearchParams();
  useEffect(() => {
    getProduct(searchParams.get("id"));
  }, [getProduct,searchParams.get("id")]);
  return (
    <Fragment>
    {loading || produit === null  ? (
      <Spinner />
    ) : (    
     <Fragment>
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
                        <table class="table clients-contant-table mb-0">
                            <thead>
                                <tr>
                                    <th scope="col">Nom</th>
                                    <th scope="col">Prix Unitaire</th>
                                    <th scope="col">Quantité</th>                             
                                    <th scope="col">Modifié</th>                   
                                </tr>
                            </thead>
                            <tbody>
                            <tr>
    <td>
        <div class="d-flex align-items-center">
      
            <p class="font-weight-bold">{produit.nom}</p>
        </div>
    </td>
    <td>{produit.prixUnitaire}</td>
    <td>{produit.quantite}</td>
    <td>
   <Link to={`/editproduct?id=${produit._id}`} > <div class="btn btn-secondary">Modifié</div></Link>
    </td>

    </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    
    </div>
    
    </div>
    </div>  </Fragment>

)}
</Fragment>
)}
ShowDetails.propTypes = {
  getProduct: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  produit: state.produit,
});
  
export default connect(mapStateToProps, { getProduct})(ShowDetails);
