import React from 'react';
import { useParams } from 'react-router';
import useFetch from '../Commons/useFetch';
import ProductList from '../Products/ProductList'

const BrandsProductList=()=>{
    const{brand}=useParams();
    const {data:products, loading, error}=useFetch('http://localhost:8080/brands/'+brand)
    return(
        <div>
            <h1>Filtered listing - {brand}</h1>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {products && <ProductList products={products} title={`${brand} Products`} section="Categories" subSection={brand} />}
        </div>
    )
}

export default BrandsProductList;