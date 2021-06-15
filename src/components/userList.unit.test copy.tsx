import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import UserList from './userList'

interface User {
    _id: string;
    firstName: string;
    lastName: string;
    mobile: string;
    email: string;
  }
  const defaultuser = [{
    _id: "",
    firstName: "",
    lastName: "",
    mobile: "",
    email: ""
  }]

  const test = (key: any) => { }

describe('UserForm', () => {
     
    it('include first name label', () => {
      const { getByText } = render(<UserList users={defaultuser} onEdit={ test } onDelete={ test }/>);
  
      getByText('First name');
  
   
  })
});