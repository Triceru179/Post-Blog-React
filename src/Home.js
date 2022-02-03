import BlogList from "./BlogList.js";
import useFetch from "./useFetch.js";

const Home = () => {
    const { data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');


    
    return ( 
        <div className="blog-list">
            { error && <div>{error}</div>}
            { isPending && <div>Loading...</div>}
           { blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
        </div>
     );
}
 
export default Home;