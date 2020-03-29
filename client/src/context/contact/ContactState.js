import React, { useReducer } from 'react';
import axios from 'axios';
import uuid from 'uuid/v4'
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR
} from '../types';


const ContactState = props => {
    const initialState = {
      contacts:[
          {
            id:1,
            name:'lakshya',
            email:'laks12@gmail.com',
            phone:'1111111',
            type:'personal'
          },
          {
            id: 2,
            name:'lakshya12',
            email:'laks1122@gmail.com',
            phone:'33331111',
            type:'professional'
          },
          {
            id: 3,
            name:'tejus2',
            email:'tejus@gmail.com',
            phone:'222221',
            type:'personal'
          }
      ],
      current:null,
      filtered:null
    };
    const [state, dispatch] = useReducer(contactReducer, initialState);

    //add contacts
    const addContact = async contact => {

      contact.id =uuid.v4();
      
      dispatch({
        type: ADD_CONTACT,
        payload: contact
      });
    }

    //delete contacts

    const deleteContact = id => {
      dispatch({
        type: DELETE_CONTACT,
        payload: id
      });
    }
    //set current contact

    const setCurrent = contact => {
      dispatch({
        type: SET_CURRENT,
        payload: contact
      });
    }
    //clear current contact
    const clearCurrent = () => {
      dispatch({ type: CLEAR_CURRENT });
    };
    ///update contact
    const updateContact = contact => {
      dispatch({ type: UPDATE_CONTACT,payload:contact });
    };
    //filter contacts
    const filterContacts = text => {
      dispatch({ type: FILTER_CONTACTS,payload:text});
    };
    //clear filter
    const clearFilter = text => {
      dispatch({ type: CLEAR_FILTER});
    };
    

    return (
        <ContactContext.Provider
         value={{
             contacts:state.contacts,
             current: state.current,
             filtered:state.filtered,
             addContact,
             deleteContact,
             setCurrent,
             clearCurrent,
             updateContact,
             filterContacts,
             clearFilter
         }}>
            {props.children}
        </ContactContext.Provider>
    )
};  

export default ContactState;