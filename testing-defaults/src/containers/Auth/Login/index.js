import React from "react";
import PropTypes from 'prop-types';
//import Actions from "actions";
import LoginForm from "../../../components/Auth/LoginForm";
import { useTranslation } from 'react-i18next';

/** Login container connected to the store */
function Login({ history, isLoading, invalid, signIn }) {
  const { t } = useTranslation('login');

  const onSubmit = data => {
    const email = data.email;
    const password = data.password;

    if (invalid) return;
    /** Api call for SignIn page */
    signIn({ session: { email, password, service: "DI" } });
  };

  return (
    <div className="login">
      <div className="logo">
        <img
          src={require("../../../img/logo-primary.svg")}
          alt="logo"
          className="img-responsive"
        />
      </div>
      <h2>
        {t('welcome')}
      </h2>
      <div className="dark-gray-hr" />
      {/** Calling the login component to display the login Form */}
      <LoginForm onSubmit={onSubmit} isLoading={isLoading} history={history} />
    </div>
  );
}

// const mapStateToProps = store => ({
//   isLoading: store.AUTH.signIn.isLoading
// });

// const mapDispatchToProps = {
//   signIn: Actions.signIn,
//   setLocale: Actions.setLocale
// };

Login.propTypes = {
  history: PropTypes.object,
  invalid: PropTypes.object,
};

export default Login;
