import React from "react";
import PropTypes from 'prop-types';
import { useForm } from "react-hook-form";
import InputText from "@acend-io/rein-core-components/Forms/InputText";
import PrimaryButton from "@acend-io/rein-core-components/Buttons/PrimaryButton";
import SecondaryButton from "@acend-io/rein-core-components/Buttons/SecondaryButton";
import Checkbox from "@acend-io/rein-core-components/Forms/Checkbox";
import * as Validation from "../../utils/validation";
import Spinner from "../common/Spinner";
import { useTranslation } from 'react-i18next';

/** Login Form Component */
export default function LoginForm({ isLoading, history, onSubmit }) {
  const { register, errors, handleSubmit } = useForm();
  const { t } = useTranslation(['login', 'common']);

  return (
    <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-field">
        <InputText
          register={register}
          errors={errors}
          placeholder={t("common:email")}
          id="email"
          name="email"
          type="email"
          validate={[Validation.required, Validation.email]}
        />
      </div>
      <div className="form-field">
        <InputText
          register={register}
          errors={errors}
          placeholder={t("common:password")}
          id="password"
          name="password"
          type="password"
          validate={[Validation.required]}
        />
      </div>
      <div className="form-field">
        <Checkbox
          register={register}
          errors={errors}
          id="rememberUser"
          name="rememberUser"
          label={t("keepMeLoggedIn")}
        />
      </div>
      <div className="form-button sign-in">
        {!isLoading && (
          <PrimaryButton type="submit">{t("login")}</PrimaryButton>
        )}
        <Spinner isLoading={isLoading} />
      </div>
      <div className="form-link">
        <a href="/forgot-password">
          {t("forgotPassword")}
        </a>
      </div>
      <div className="dark-gray-hr" />
      <div className="form-button">
        <SecondaryButton onClick={() => history.push("/register")}>
          {t("createAccount")}
        </SecondaryButton>
      </div>
    </form>
  );
}

LoginForm.propTypes = {
  isLoading: PropTypes.string,
  history: PropTypes.object,
  /** submitting the login form */
  onSubmit: PropTypes.func,
};
