import MovieCard from "../components/MovieCard.jsx"



function About () {
    return(
        <>
        <div className="Movies-container">
            <div className="title">
                <h1>Movies Search Engine</h1>
            </div>
            <div className="search">
                <input className="input" type="text" placeholder="Write.."/>
                <button className="btn">Search</button>
            </div>


        </div>
        </>
    );
}

export default About