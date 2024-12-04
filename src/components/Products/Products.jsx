import './Products.scss';

function Products({Productname, onClick}){

    
    return(
     <section className='products'>

         <h2 className='products-title'>Lets change a Product name</h2>
         <p>Procuct Name:{Productname}</p>

         <button onClick={onClick}>Change</button>

     </section>
    )
}
export default Products;