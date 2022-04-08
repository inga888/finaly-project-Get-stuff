import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../../redux/actions/userAction';

function SignUp() {
  const [userSignUp, setUserSignUp] = useState({
    email: '',
    password: '',
    userName: '',
  });

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setUserSignUp((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    let payload = Object.entries(userSignUp).filter((el) => (el[1] ? el[1].trim() : el[1]));
    if (payload.length) {
      payload = Object.fromEntries(payload);
      dispatch(signUp(payload, navigate));
    }
  };

  return (
<<<<<<< HEAD
    <center>
      <div className="reg content">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Имя</label>
            <input name="login" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Введите имя" />
=======
    <div className="content user">
      <div className="row">
        <form onSubmit={submitHandler} className="col s12">
          <div className="row">
            <div className="input-field">
              <i className="material-icons prefix">account_circle</i>
              <input onChange={changeHandler} id="icon_prefix" className="validate" value={userSignUp.name} type="text" name="name" placeholder="Имя" />
            </div>
            <div className="input-field">
              <i className="material-icons prefix">alternate_email</i>
              <input onChange={changeHandler} id="icon_telephone" className="validate" value={userSignUp.email} type="email" name="email" placeholder="email" />
            </div>
            <div className="input-field">
              <i className="material-icons prefix">key</i>
              <input onChange={changeHandler} id="icon_password" className="validate" value={userSignUp.password} type="password" name="password" placeholder="Пароль" />
            </div>
            <button type="submit" className="waves-effect cyan waves-teal btn-flat">зарегистрироваться</button>
>>>>>>> authaclient
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
            <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Введите почту" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
            <input name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Придумайте пароль" />
          </div>

          <button type="submit" className="btn btn-warning">Регистрация</button>
        </form>
      </div>
    </center>

  );
}

export default SignUp;
