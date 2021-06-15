import React from 'react';
import { render, fireEvent, screen, act } from '@testing-library/react';
import UserForm from './userForm'

const defaultuser = {
    _id: "",
    firstName: "",
    lastName: "",
    mobile: "",
    email: ""
  }

describe('UserForm', () => {

    it('initial value', () => {
        const test = jest.fn();
        
        render(<UserForm onSubmit={ test } />);

        const firstinput = screen.getByPlaceholderText("Enter firstname..")
        expect(firstinput).toHaveValue('')

        const lastinput = screen.getByPlaceholderText("Enter email..")
        expect(lastinput).toHaveValue('')
        
        const emailinput = screen.getByPlaceholderText("Enter email..")
        expect(emailinput).toHaveValue('')

        const mobileinput = screen.getByPlaceholderText("Enter mobile phone..")
        expect(mobileinput).toHaveValue('')
        //fireEvent.click(getByText('Submit'));
      })

      it('on Edit', () => {
        const test = jest.fn();
        
        render(<UserForm onSubmit={ test } />);

        const firstinput = screen.getByPlaceholderText("Enter firstname..")
        expect(firstinput).toHaveValue('')

        const lastinput = screen.getByPlaceholderText("Enter email..")
        expect(lastinput).toHaveValue('')
        
        const emailinput = screen.getByPlaceholderText("Enter email..")
        expect(emailinput).toHaveValue('')

        const mobileinput = screen.getByPlaceholderText("Enter mobile phone..")
        expect(mobileinput).toHaveValue('')
        //fireEvent.click(getByText('Submit'));
      })

  it('change value in email field', async () => {
    const onSubmitSpy = jest.fn();

    const { getByPlaceholderText } = render(<UserForm onSubmit={ onSubmitSpy } />);
    const input = getByPlaceholderText("Enter email..")
    
    const button = screen.getByText('Submit');
    act(() => {
      fireEvent.change(input, { target: { value: 'test@email.com' } })
    });
    expect(input).toHaveValue('test@email.com')

  });

  it('Submit', async () => {
    const onSubmitSpy = jest.fn();

    render(<UserForm onSubmit={ onSubmitSpy } />);
    const form = screen.getByTestId("form-element");

    expect(onSubmitSpy).not.toHaveBeenCalled();

    act(() => {
      fireEvent.submit(form, {
        target: {
          values: {
            firstName: "test",
            lastName: "test",
            email: 'test@email.com',
            mobile: '1234'
          },
        },
      });
    });

    expect(onSubmitSpy).toHaveBeenCalledTimes(1);
    // expect(onSubmitSpy).toHaveBeenCalledWith({
    //   firstName: "test",
    //   lastName: "test",
    //   email: 'test@email.com',
    //   mobile: '1234'
    // });


  });


  it('Submit can click and not disable', () => {
    const test = jest.fn();
    render(<UserForm onSubmit={ test } />);

    const button = screen.getByText('Submit');
    expect(button).toBeInTheDocument();
    expect(button).not.toBeDisabled();

    act(() => {
    fireEvent.click(button);
    });
})

});