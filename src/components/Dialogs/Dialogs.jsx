import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id

    return <div className={classes.dialog + ' ' + classes.active}>
    <NavLink to={path}>{props.name}</NavLink>
</div>
}

const Message = (props) => {

    return <div className={classes.message}> {props.message} </div>
}

const Dialogs = (props) => {
    //Creating array of objects for usage in Dialogs for Mapping

    let dialogsData = [
        { id : 1,name : 'Adam'}, 
        { id : 2, name : 'Diana'},
        { id : 3, name : 'Vania' },
        { id : 4, name : 'Edgar'},
        { id : 5, name : 'Evita'},
        { id : 6, name : 'Don'},
 
    ]

    let messagesData = [
        { id : 1,message : 'Hi'}, 
        { id : 2, message : 'YO'},
        { id : 3, message : 'Howdy' },
        { id : 4, message : 'Greetings'},
        { id : 5, message : 'Hello'},
        { id : 6, message : 'Zhuan'},
 
    ]

    //Mapping arrays into JSX elements

    let messagesElements = messagesData.map( (message) => {
        return(
            <Message message={message.message}/>
        )
    })

    let dialogElements =  dialogsData.map( (dialog) => {
        return(
            <DialogItem name={dialog.name} id={dialog.id} /> );
    });
    

    
    return(

        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
{/*                 
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/> */}

                {/* Use Mapped array of JSX elements */}
                {
                    dialogElements 
                } 
                

            </div>
            <div className={classes.messages}>
                {/* <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>
                <Message message={messagesData[4].message}/>
                <Message message={messagesData[5].message}/> */}
                {/* Use Mapped array of JSX elements */}
                {
                    messagesElements
                }
            </div>
        </div>
    );
}

export default Dialogs;