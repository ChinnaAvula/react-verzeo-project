import about from '../Images/about.jpg'
import about1 from '../Images/about1.jpg'



function Aboutus(){
    return(
        <>
        <h3 className="head">Aboutus page content</h3>
        <div>
        <h3>Paragraphs</h3>
        <p>
        A remarkable about page is genuine, approachable, and distinguished. It should give the visitor a glimpse into what working with you might be like. You can include personal interests, stories, and photos that convey the unique story of your business. You may also include information about who’s on your team and what their roles are.

        About pages are personal to you and your company, so the structure of your about page will vary based on what you want to highlight. However, you’ll start with the same writing process.

        Let’s explore the set-by-step guide to building your about page.
        </p>
        <h3>Images</h3>
        <img src={about} alt='beach image' width='500px' height='300px'/>
        <img src={about1} alt='baloon image' width='500px' height='300px'/>
        <input type="image" img src = {'https://robohash.org/${id}?size=300x300'} alt="photo" />


        </div>

        </>
    )
};
export default Aboutus
