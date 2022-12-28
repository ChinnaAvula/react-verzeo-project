import homepage from '../Images/homepage.jpg';
import homepage1 from '../Images/homepage1.jpg';
import homepage2 from '../Images/homepage2.jpg';
import homepage3 from '../Images/homepage3.jpg';

function Homepage(){
    return(
        <>
        <div>
        <h3 className="head">Homepage</h3>
        <h3>paragraphs</h3>
        <p>
        You see, your homepage needs to wear a lot of hats. Rather than treating it like a dedicated landing page built around one particular action, it should be designed to serve different audiences, from different origins. And in order to do so effectively, it needs to be built with purpose. In other words, you'll need to incorporate elements that attract traffic, educate visitors, and invite conversions.

        To improve the performance of your homepage, check out these elements every homepage must have.
        </p>
        <h3>Images</h3>
        <img src={homepage} alt='home page image' width='500px' height='300px'/>
        <img src={homepage1} alt='home page image' width='500px' height='300px'/>
        <img src={homepage2} alt='home page image' width='500px' height='300px'/>
        <img src={homepage3} alt='home page image' width='500px' height='300px'/>

        </div>
        </>

    )
};

export default Homepage