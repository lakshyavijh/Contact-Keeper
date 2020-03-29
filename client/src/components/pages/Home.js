import React ,{useContext,useEffect} from 'react'
import ContactForm from '../contacts/ContactForm';
import Contacts from '../contacts/Contacts';
import ContactFilter from '../contacts/ContactFiler';
import AuthContext from '../../context/auth/authContext';
const Home = () => {
    const authContext =useContext(AuthContext);
    useEffect(() =>{
        authContext.loadUser();
        // eslint-diabble-next-line
    },[])
    return (
        <div className='grid-2'>
            
            <div>
            <ContactForm />
            </div>
            <div>
                <ContactFilter/>
                <Contacts/>
            </div>
        </div>
    )
}
export default Home