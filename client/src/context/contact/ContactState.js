import React, { useReducer } from 'react';
import uuid from 'uuid';
import contactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Rushi',
        email: 'rushi@rushi.com',
        phone: '1-800-RUSHI',
        type: 'personal',
      },
      {
        id: 2,
        name: 'Rushi',
        email: 'rushi@rushi.com',
        phone: '1-800-RUSHI',
        type: 'personal',
      },
      {
        id: 3,
        name: 'Rushi',
        email: 'rushi@rushi.com',
        phone: '1-800-RUSHI',
        type: 'professional',
      },
    ],
    current: null,
    filtered: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  const clearCurrent = contact => {
    dispatch({ type: CLEAR_CURRENT });
  };

  const updateContact = contact => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };

  const filterContacts = text => {
    dispatch({type: FILTER_CONTACTS, payload: text})
  }

  const clearFilter = () => {
    dispatch({type: CLEAR_FILTER})
  }

  return (
    <contactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts, 
        clearFilter
      }}>
      {props.children}
    </contactContext.Provider>
  );
};

export default ContactState;
