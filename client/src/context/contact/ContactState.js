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
        type: 'personal',
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  return (
    <contactContext.Provider>
      value={{ contacts: state.contacts }}
      {props.children}
    </contactContext.Provider>
  );
};

export default ContactState;
