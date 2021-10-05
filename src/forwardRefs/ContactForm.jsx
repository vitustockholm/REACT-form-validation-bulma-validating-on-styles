import React, { useRef, useEffect } from 'react';
import TextInput from './TextInput';
import TextLabel from './TextLabel';
import Button from './Button';
import '../App.css';

const ContactForm = () => {
  // Hooks
  // --- state

  // --side effects    // styling css
  useEffect(() => {
    usernameInputRef.current.focus();
  }, []);
  //  refs
  const nameInputRef = useRef();
  const usernameInputRef = useRef();
  const userNameHelperRef = useRef();
  const emailInputRef = useRef();
  const emailInputHelperRef = useRef();

  // Custom functions

  const handleOnChange = (e) => {
    console.log(e.target);
    //
  };

  const getRefFocus = (e) => {
    nameInputRef.current.value.length !== 0 &&
    nameInputRef.current.value.length >= 3
      ? (nameInputRef.current.className = 'input is-success')
      : (nameInputRef.current.className = 'input is-danger');

    // testing console
    console.log(
      'nameInputRef.current.length',
      nameInputRef.current.value.length
    );
    //
    console.log(nameInputRef);
  };

  //  const getClickedButton = (e) => {
  // if (e.target === buttonOneRef.current) {
  //     buttonOneRef.current.innerText = 'Wohoo';
  //     buttonTwoRef.current.innerText = 'Damnnn';
  //   } else {
  //     buttonOneRef.current.innerText = 'Damnnn';
  //     buttonTwoRef.current.innerText = 'Wohoo';
  //   }
  // };
  //
  const getRefFocusSurname = (e) => {
    usernameInputRef.current.value.length !== 0 &&
    usernameInputRef.current.value.length >= 5
      ? (usernameInputRef.current.className = 'input is-success') &&
        (userNameHelperRef.current.className = 'help is-success')
      : (usernameInputRef.current.className = 'input is-danger') &&
        (userNameHelperRef.current.className = 'help is-danger');

    // testing console
    console.log(
      'nameInputRef.current.length',
      usernameInputRef.current.value.length
    );
    //
    console.log(usernameInputRef);
  };
  //
  const getRefFocusEmail = (e) => {
    emailInputRef.current.value.length !== 0 &&
    emailInputRef.current.value.length >= 5
      ? (emailInputRef.current.className = 'input is-success') &&
        (emailInputHelperRef.current.className = 'help is-success')
      : (emailInputRef.current.className = 'input is-danger') &&
        (emailInputHelperRef.current.className = 'help is-danger');

    // testing console
    console.log(
      'emailInputRef.current.length',
      emailInputRef.current.value.length
    );
    //
    console.log(emailInputRef);
  };
  //

  return (
    <>
      <form>
        <div className='field'>
          {/* <TextLabel ref={nameInputRef} text='aaaaa' /> */}
          <TextLabel className='label' text='Name'></TextLabel>
          <div className='control'>
            {/* //////////////////////// */}
            <TextInput
              className='input' //is-success
              type='text'
              placeholder='Text input'
              ref={nameInputRef}
              action={(e) => getRefFocus(handleOnChange(e))}
            />
          </div>
        </div>

        <div className='field'>
          <TextLabel className='label' text='User Name'></TextLabel>
          <div class='control has-icons-left has-icons-right'>
            <TextInput
              className='input ' //is-success
              type='text'
              placeholder='Bulma'
              value='bulma'
              ref={usernameInputRef}
              action={(e) => getRefFocusSurname(handleOnChange(e))}
            />
            <span className='icon is-small is-left'>
              <i className='fas fa-user'></i>
            </span>
            <span className='icon is-small is-right'>
              <i className='fas fa-check'></i>
            </span>
          </div>
          <p className='help ' ref={userNameHelperRef}>
            This username is available
          </p>
        </div>

        <div className='field'>
          <TextLabel className='label' text='Email'>
            Email
          </TextLabel>
          <div className='control has-icons-left has-icons-right'>
            <TextInput
              className='input' // is-danger
              type='email'
              placeholder='hello'
              ref={emailInputRef}
              action={(e) => getRefFocusEmail(handleOnChange(e))}
              //   value='hello@'
            />
            <span className='icon is-small is-left'>
              <i className='fas fa-envelope'></i>
            </span>
            <span className='icon is-small is-right'>
              <i className='fas fa-exclamation-triangle'></i>
            </span>
          </div>
          <p className='help is-danger' ref={emailInputHelperRef}>
            This email is invalid
          </p>
        </div>

        <div className='field'>
          <label className='label'>Subject</label>
          <div className='control'>
            <div className='select'>
              <select>
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </div>
          </div>
        </div>

        <div className='field'>
          <label className='label'>Message</label>
          <div className='control'>
            <textarea className='textarea' placeholder='Textarea'></textarea>
          </div>
        </div>

        <div className='field'>
          <div className='control'>
            <label className='checkbox'>
              <input type='checkbox' />I agree to the{' '}
              <a href='#index'>terms and conditions</a>
            </label>
          </div>
        </div>

        <div className='field'>
          <div className='control'>
            <label className='radio'>
              <input type='radio' name='question' />
              Yes
            </label>
            <label className='radio'>
              <input type='radio' name='question' />
              No
            </label>
          </div>
        </div>

        <div className='field is-grouped'>
          <div className='control'>
            <button className='button is-link'>Submit</button>
          </div>
          <div className='control'>
            <button className='button is-link is-light'>Cancel</button>
          </div>
          {/* <TextInput
            text='Click me'
            action={handleOnChange}
            ref={nameInputRef}
          /> */}
        </div>
      </form>
    </>
  );
};

export default ContactForm;
