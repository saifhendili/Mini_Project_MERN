import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteProduct } from '../../actions/produit';
import { Link } from 'react-router-dom';

function ProductItem({deleteProduct, x: { _id,nom,prixUnitaire,quantite}}) {
    
    return (
        <tr>
    <td>
        <div class="d-flex align-items-center">
      
            <p class="font-weight-bold">{nom}</p>
        </div>
    </td>
    <td>{prixUnitaire}</td>
    <td>{quantite}</td>
    <td>   <Link to={`/myproduct?id=${_id}`} ><button class="btn btn-primary">Visité</button></Link></td>
    <td>
   <Link to={`/editproduct?id=${_id}`} ><div class="btn btn-secondary">Modifié</div></Link>
    </td>
    <td>
       <button onClick={(e)=>deleteProduct(_id)} class="btn btn-icon btn-outline-danger btn-round">Supprimé</button>
    
       </td>
    </tr>
      )
}


  export default connect(null, {deleteProduct})(ProductItem);

