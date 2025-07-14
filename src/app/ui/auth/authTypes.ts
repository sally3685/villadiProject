export interface authTypes {
  verifypasswordForm: {
    title: string;
    code: string;
    resend: string;
    click: string;
    verify: string;
  };
  submitStatus: {
    waitSubmit: string;
    submit: string;
  };
  done: {
    success: string;
    error: string;
  };
  resendCodeForm: {
    email: string;
    password: string;
  };
  authForm: {
    validateFields: string;
    email: string;
    emailPlaceHolder: string;
    password: string;
    passwordPlaceHolder: string;
    Epassword: string;
    Npassword: string;
  };
  SignUp: {
    validationTips: {
      email: { title: string; rules: string[] };
      password: { title: string; rules: string[] };
    };
  };
  resetPasswordForm: {
    title: string;
  };
}
