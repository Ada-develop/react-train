import classes from '../MyPosts/MyPosts.module.css';
import MyPosts from '../MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = () => {
    return(
        <div>
        <ProfileInfo/>
            
        <MyPosts/>     
        </div>

        
    );
}

export default Profile;