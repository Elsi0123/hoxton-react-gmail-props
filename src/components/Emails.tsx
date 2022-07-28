import SingleEmail from "./SingleEmail"
import './SingleEmail.css'

type Email = {
    id:number 
    sender:string 
    title:string 
    starred:boolean 
    read:boolean
}

type Props = {
    getFilteredEmails: () => Array<Email>
    toggleRead: (targetEmail: Email) => void
    toggleStar: (targetEmail: Email) => void
}

function Emails({getFilteredEmails,toggleRead,toggleStar}:Props){
    return (
        <main className="emails">
        <ul>
          {getFilteredEmails().map((email, index) => (

            <SingleEmail 
            index={index} email={email} toggleRead={toggleRead} toggleStar={toggleStar}/>

          ))}
        </ul>
      </main>
    )
}

export default Emails