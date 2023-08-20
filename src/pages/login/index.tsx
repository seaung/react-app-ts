import LoginForm from "./components/loginForm";

const LoginPage = () => {
    return (
        <div className="login-container">
            <div className="login-box">
                <div className="login-left">
                    <img/>
                </div>
                <div className="login-form">
                    <div className="login-logo">
                        <img />
                        <span>React-app-ts</span>
                    </div>
                    <LoginForm/>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;
