import product from '../Images/product.jpg'
import product1 from '../Images/product1.jpg'
import product2 from '../Images/product2.jpg'
import product3 from '../Images/product3.jpg'
import product4 from '../Images/product4.jpg'
import product5 from '../Images/product5.jpg'
import product6 from '../Images/product6.jpg'
import product7 from '../Images/product7.jpg'
import product8 from '../Images/product8.jpg'


function Products(){
    return(
        <>
        <h3 className="head">products page content</h3>
        <h3>Paragraphs</h3>
        <p>
        Effective product descriptions can possibly lure potential customers. Good product descriptions can potentially influence a purchase decision. Great product descriptions can ultimately help improve conversion rates and increase sales, as well as boost your visibility and SEO on paid channels.

        The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.

        Business owners, marketers and copywriters all know the importance of writing product descriptions, but what’s the best way to help reach your target audience?
        </p>
        <h3>images</h3>
        <img src={product} alt='product image' width='300px' height='300px'/>
        <img src={product1} alt='product image' width='300px' height='300px'/>
        <img src={product2} alt='product image' width='300px' height='300px'/>
        <img src={product3} alt='product image' width='300px' height='300px'/>
        <img src={product4} alt='product image' width='300px' height='300px'/>
        <img src={product5} alt='product image' width='300px' height='300px'/>
        <img src={product6} alt='product image' width='300px' height='300px'/>
        <img src={product7} alt='product image' width='300px' height='300px'/>
        <img src={product8} alt='product image' width='300px' height='300px'/>
        </>
    )
};

export default Products