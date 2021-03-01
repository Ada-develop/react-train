import classes from '../MyPosts/MyPosts.module.css';
import MyPosts from '../MyPosts/MyPosts';

const Profile = () => {
    return(
        <div  className={classes.posts}>
            <ul>
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.wccftech.com%2Fwp-content%2Fuploads%2F2013%2F01%2FCyberPunk-2077-logo.jpg&f=1&nofb=1"/>
                <li>
                    Description
                </li>
                <li>
                    My Posts
                </li>
                <li>
                    New Posts
                </li>
                
            </ul>
            
        <MyPosts/>     
        </div>

        
    );
}

export default Profile;