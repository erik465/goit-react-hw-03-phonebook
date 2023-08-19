import {StyledList} from './ContactsList.styled'

export const ContactsList = ({contacts, deleteContact}) =>{
    return (
        <StyledList > 
            {contacts.map(contact =>{
                return( 
                <li key={contact.id}>
                    <p>{contact.name} : {contact.number}</p>
                    <button onClick={() => deleteContact(contact.id)}>Delete</button>
                </li> 
                )
            })}
        </StyledList>
    )
}