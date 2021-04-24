import css from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return(
        <div >
            <ul>
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.wccftech.com%2Fwp-content%2Fuploads%2F2013%2F01%2FCyberPunk-2077-logo.jpg&f=1&nofb=1" className={css.cyberimg}/>
                <div className={css.descriptionBlock}>
                    Description
                </div>
        
            </ul>
             
        </div>

        
    );
}

export default ProfileInfo;