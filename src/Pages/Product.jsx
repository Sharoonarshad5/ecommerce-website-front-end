import React ,{useContext} from 'react'
import {ShopContext} from '../Context/ShopContext'
import {useParams }from 'react-router-dom'
import Breadcrum from '../Components/BreadCrums/Breadcrum'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import BoxDiscription from '../Components/BoxDiscription/BoxDiscription'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'


const Product = () => {
  const {all_product} =useContext(ShopContext);
  const {productId} =useParams();
  const product = all_product.find((e) =>e.id === Number(productId));
  return (
    <div>
      <Breadcrum product={product}></Breadcrum>
      <ProductDisplay product={product}></ProductDisplay>
      <BoxDiscription></BoxDiscription>
      <RelatedProducts></RelatedProducts>

    </div>
  )
}

export default Product
