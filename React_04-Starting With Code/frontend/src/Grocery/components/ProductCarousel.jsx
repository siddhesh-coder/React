import React, { useEffect, useState } from 'react';
import './ProductCarousel.css';
import ProductCard from './ProductCard';

const ProductCarousel = ({products}) => {
  const [title, setTitle] = useState('');
  const [productsItem, setProductsItem] = useState([]);

  useEffect(()=>{
       setTitle(products?.widgetInfo?.title || '');
       setProductsItem(products?.data || []);
  },[products])
 
  return (
    <div>
      <h3 style={{color: 'rgb(230, 86, 123)'}}>{title}</h3>
      <div className='product-carousal'>
         {
           productsItem.map((product)=> <ProductCard key={product.product_id} items={product}/>)
         }
      </div>
    </div>
  )
}

export default ProductCarousel;