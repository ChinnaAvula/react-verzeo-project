import services from '../Images/services.jpg'
import services1 from '../Images/services1.jpg'

function Services(){
    return(
        <>
         <h3 className="head">services page content</h3>
         <div>
            <p>
            Service descriptions are like product descriptions. But instead of describing tangible goods, you’re describing the services that you provide, including what you do, some basics about how you do it and why people should care about the service.
            <br/><br/>
            A potential customer has landed on your website, and your home page has so far convinced them enough that they like the vibe of your company. But your site’s job is not done yet. Before they decide if you’re the right business for the job, your customer will click through to your service descriptions to make sure that what you offer fits with what they’re looking for.
            <br/> <br/>        
            This page offers a critical opportunity to convert a visitor into a customer. How you present your services could be the clincher between someone picking up the phone, and someone clicking away.
            </p>
            <h3>Images</h3>
            <img src={services} alt='services page' width='500px' height='300px'/>
            <img src={services1} alt='services page' width='500px' height='300px'/>


         </div>
        </>
    )
}

export default Services