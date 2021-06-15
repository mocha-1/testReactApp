import React from 'react';
import { render, fireEvent, screen, act } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Signin from './Signin'

const defaultuser = {
    email: "bob@gmail.com",
    password: "1234"
  }


describe('UserForm', () => {

    it('initial value', () => {
        const test = jest.fn();
        
        render(
            <Router>
                <Signin setToken={test} history />
            </Router>);

        const emailinput = screen.getByPlaceholderText("Enter email")
        expect(emailinput).toHaveValue('')
        
        const passinput = screen.getByPlaceholderText("Enter password")
        expect(passinput).toHaveValue('')

        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).not.toBeDisabled();

        
        //fireEvent.click(getByText('Submit'));
      })

    //   it('Submit', () => {
    //     const test = jest.fn();
    //     const onSubmitSpy = jest.fn();
        
    //     render(
    //         <Router>
    //             <Signin setToken={test} history />
    //         </Router>);

    //     const emailInput = screen.getByPlaceholderText("Enter email")   
    //     const passInput = screen.getByPlaceholderText("Enter password")
    //     const button = screen.getByRole('button');

    //     fireEvent.change(emailInput, { target: { value: 'test@email.com' } });
    //     fireEvent.change(passInput, { target: { value: 'password' } });
    //     fireEvent.click(button);

    //     expect(onSubmitSpy).toHaveBeenCalled();
    //     // expect(onSubmitSpy).toHaveBeenCalledWith({
    //     //     email: 'test@email.com',
    //     //     password: 'password',
    //     //   });
    //   })

      

});