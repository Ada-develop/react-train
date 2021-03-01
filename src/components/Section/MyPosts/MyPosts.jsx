import classes from './MyPosts.module.css';
import Post from '../Posts/Post';

const MyPosts = () =>{
    return(
        <div>
            <div>
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
                <div className={classes.posts}>
                    <Post messages='Hi, how are you?' likesCount='235'/>
                    <Post messages="It's my first post" likesCount='45'/>

                </div>
            </div>
        </div>
        
    );

}

export default MyPosts;