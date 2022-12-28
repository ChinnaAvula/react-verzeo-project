function Contact(){
    return (
        <>
        <h3 className="head">contact page content</h3>
        <h4>login</h4>
        <form>
            <label>
            Name:
            <input type="text" name="name" />
            </label>
            <br/><br/>
            <label>
                Email:
                <input type="text" name="email"/>
            </label>
            <br/><br/>
            <input type="submit" value="Submit" />
        </form>

        </>
    )
};

export default Contact