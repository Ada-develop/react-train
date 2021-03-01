import classes from './Post.module.css';

const Post = (props) =>{
    return(

            <div>
                <ul>
                    <li className={classes.item}>
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.6tG60pq8dDNnq0LJAWNKIQHaHa%26pid%3DApi&f=1"/>
                        {props.messages}
                        <br/>
                        <span>Like {props.likesCount}</span>

                    </li>
                    
                </ul>
        
            </div>

           
    );

}

export default Post;