import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const history = useHistory();
    const [isPending, setIsPeding] = useState(false);

    const [post, setPost] = useState({
        title: "",
        body: "",
        author: "mario"
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setPost((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPeding(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(post)
        }).then(() =>{
            console.log("new blog added");
            setIsPeding(false);
            history.push('/');
        })

        setIsPeding(false);
    }


    return ( 
    <div className="create">
        <h2>Add a new blog</h2>
        <form onSubmit={handleSubmit}>
            <label>Blog title:</label>
            <input type="text" required name="title" value={post.title} onChange={(e) => handleChange(e)}/>
            <label>Blog content:</label>
            <textarea required name="body" value={post.body} onChange={(e) => handleChange(e)}>
            </textarea>
            <label>Blog Author:</label>
            <select name="author" value={post.author} onChange={(e) => handleChange(e)}>
                <option value="mario">mario</option>
                <option value="yoshi">yoshi</option>
            </select>
            { !isPending && <button>Add Blog</button>}
            { isPending && <button disabled>Adding Blog...</button>}
        </form>
    </div> 
    );
}
 
export default Create;