import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <React.Fragment>
            <div className="account-pages my-5 pt-sm-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6 col-xl-5">
                            <div className="card overflow-hidden">
                                <div className="bg-primary bg-soft">
                                    <div className="row">
                                        <div className="col-7">
                                            <div className="text-primary p-4">
                                                <h5 className="text-primary">Welcome Back !</h5>
                                                <p>Sign in to continue to Stickers Panel.</p>
                                            </div>
                                        </div>
                                        <div className="col-5 align-self-end">
                                            <img src="assets/images/profile-img.png" alt="" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body pt-0">
                                    <div className="auth-logo">
                                        <Link to="/" className="auth-logo-light">
                                            <div className="avatar-md profile-user-wid mb-4">
                                                <span className="avatar-title rounded-circle bg-light">
                                                    <img src="assets/images/logo.png" alt="" className="rounded-circle" height="34" />
                                                </span>
                                            </div>
                                        </Link>

                                        <Link to="/" className="auth-logo-dark">
                                            <div className="avatar-md profile-user-wid mb-4">
                                                <span className="avatar-title rounded-circle bg-light">
                                                    <img src="assets/images/logo.png" alt="" className="rounded-circle" height="34" />
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="p-2">
                                        <form className="form-horizontal">

                                            <div className="mb-3">
                                                <label for="username" className="form-label">Username</label>
                                                <input type="text" className="form-control" id="username" placeholder="Enter username" />
                                            </div>

                                            <div className="mb-3">
                                                <label className="form-label">Password</label>
                                                <div className="input-group auth-pass-inputgroup">
                                                    <input type="password" className="form-control" placeholder="Enter password" aria-label="Password" aria-describedby="password-addon" />
                                                    <button className="btn btn-light " type="button" id="password-addon"><i className="mdi mdi-eye-outline"></i></button>
                                                </div>
                                            </div>

                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="remember-check" />
                                                    <label className="form-check-label" for="remember-check">
                                                        Remember me
                                                    </label>
                                            </div>

                                            <div className="mt-3 d-grid">
                                                <Link to='/dashboard' className="btn btn-primary waves-effect waves-light" type="submit">Log In</Link>
                                            </div>

                                            <div className="mt-4 text-center">
                                                <h5 className="font-size-14 mb-3">Sign in with</h5>

                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <Link to="/" className="social-list-item bg-primary text-white border-primary">
                                                            <i className="mdi mdi-facebook"></i>
                                                        </Link>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <Link to="/" className="social-list-item bg-info text-white border-info">
                                                            <i className="mdi mdi-twitter"></i>
                                                        </Link>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <Link to="/" className="social-list-item bg-danger text-white border-danger">
                                                            <i className="mdi mdi-google"></i>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="mt-4 text-center">
                                                <Link to="/" className="text-muted"><i className="mdi mdi-lock me-1"></i> Forgot your password?</Link>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>
                            <div className="mt-5 text-center">

                                <div>
                                    <p>Don't have an account ? <Link to="/register" className="fw-medium text-primary"> Signup now </Link> </p>
                                    <p>© <script>document.write(new Date().getFullYear())</script> SkyPearl iNfotech. Crafted with <i className="mdi mdi-heart text-danger"></i> by SkyPearl iNfotech</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Login;
