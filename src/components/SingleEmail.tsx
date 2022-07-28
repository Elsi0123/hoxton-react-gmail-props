type Email = {
    id:number
    sender:string
    title:string 
    starred:boolean 
    read:boolean 
}

type Props = {
    index:number 
    email:Email 
    toggleRead:(targetEmail: Email) => void 
    toggleStar:(targetEmail: Email) => void
}


function SingleEmail({index, email, toggleRead, toggleStar}: Props){
    return(
        <li
              key={index}
              className={`email ${email.read ? "read" : "unread"}`}
            >
              <div className="select">
                <input
                  className="select-checkbox"
                  type="checkbox"
                  checked={email.read}
                  onChange={() => toggleRead(email)}
                />
              </div>
              <div className="star">
                <input
                  className="star-checkbox"
                  type="checkbox"
                  checked={email.starred}
                  onChange={() => toggleStar(email)}
                />
              </div>
              <div className="sender">{email.sender}</div>
              <div className="title">{email.title}</div>
            </li>
    )
}

export default SingleEmail