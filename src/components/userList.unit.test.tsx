import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import UserList from './userList'



describe('UserForm', () => {
     
    it('include first name label', () => {
      const test = jest.fn();
      const defaultuser = [{
        _id: "",
        firstName: "",
        lastName: "",
        mobile: "",
        email: ""
      }]

      const { getByText } = render(<UserList users={defaultuser} onEdit={ test } onDelete={ test }/>);
      getByText('First name');
    })

    it('is show correct', () => {
        const test = jest.fn();
        const defaultuser = [{
            _id: "1234",
            firstName: "test_firstName",
            lastName: "test_lastName",
            mobile: "test_mobile",
            email: "test@email.com"
          }]
        
        const { getByText } = render(<UserList users={defaultuser} onEdit={ test } onDelete={ test }/>);
        getByText('test_firstName');
        getByText('test_lastName');
        getByText('test_mobile');
        getByText('test@email.com');

        fireEvent.click(getByText('Edit'));
        fireEvent.click(getByText('Delete'));
        //fireEvent.click(getByText('Submit'));
      })

});