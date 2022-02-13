import {useState, useEffect} from 'react';
import "./style.css";
import List from './List';
import Form from './Form';

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullName: "hasan",
      phoneNumber:"1111"
    },{
      fullName: "ali",
      phoneNumber:"222"
    },
  ]);

  useEffect(() =>{
    console.log(contacts)
  }, [contacts])

  return <div id='container'>
      < List contacts={contacts} />
      < Form addContacts ={setContacts} contacts={contacts} />
  </div>;
}

export default Contacts;
