import classes from './MyPosts.module.css';
import Post from '../Posts/Post';

const MyPosts = () =>{

    let postData = [{ id : 1, messages : 'Hi, how are you?',
likesCount : 235},
{ id : 2, messages : "It's my first post",
likesCount : 45},
{ id : 3, messages : "It's my first post",
likesCount : 5},
{ id : 4, messages : "It's my first post",
likesCount : 1535},
]

let mypostData = postData.map( (post) =>{
    return(
        <Post messages={post.messages} likesCount={post.likesCount}/>
    )
})

    return(
        <div>
            <div>
            <div className={classes.postBlock}>
                <h3>My Posts</h3>
                <div>
                <textarea></textarea>
                </div>
                <button>Add Post</button>
            </div>
                <div className={classes.posts}>
                    {/* <Post messages={postData[0].messages} likesCount={postData[0].likesCount}/>
                    <Post messages={postData[1].messages} likesCount={postData[1].likesCount}/>
                    <Post messages={postData[2].messages} likesCount={postData[2].likesCount}/>
                    <Post messages={postData[3].messages} likesCount={postData[3].likesCount}/> */}
                    {
                        mypostData
                    }

                </div>
            </div>
        </div>
        
    );

}

export default MyPosts;