import React from 'react'
import { Link } from 'react-router-dom'


export default function Register() {
    return (
        <React.Fragment>
             <div class="account-pages my-5 pt-sm-5">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8 col-lg-6 col-xl-5">
                        <div class="card overflow-hidden">
                            <div class="bg-primary bg-soft">
                                <div class="row">
                                    <div class="col-7">
                                        <div class="text-primary p-4">
                                            <h5 class="text-primary">Free Register</h5>
                                            <p>Get your free Skote account now.</p>
                                        </div>
                                    </div>
                                    <div class="col-5 align-self-end">
                                        <img src="assets/images/profile-img.png" alt="" class="img-fluid"/>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body pt-0"> 
                                <div>
                                    <Link to="index.html">
                                        <div class="avatar-md profile-user-wid mb-4">
                                            <span class="avatar-title rounded-circle bg-light">
                                                <img src="assets/images/logo.png" alt="" class="rounded-circle" height="34"/>
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                                <div class="p-2">
                                    <form class="needs-validation" novalidate action="https://themesbrand.com/skote/layouts/index.html">
            
                                        <div class="mb-3">
                                            <label for="useremail" class="form-label">Email</label>
                                            <input type="email" class="form-control" id="useremail" placeholder="Enter email" required/>  
                                            <div class="invalid-feedback">
                                                Please Enter Email
                                            </div>      
                                        </div>
                
                                        <div class="mb-3">
                                            <label for="username" class="form-label">Username</label>
                                            <input type="text" class="form-control" id="username" placeholder="Enter username" required/>
                                            <div class="invalid-feedback">
                                                Please Enter Username
                                            </div>  
                                        </div>
                
                                        <div class="mb-3">
                                            <label for="userpassword" class="form-label">Password</label>
                                            <input type="password" class="form-control" id="userpassword" placeholder="Enter password" required/>
                                            <div class="invalid-feedback">
                                                Please Enter Password
                                            </div>       
                                        </div>
                    
                                        <div class="mt-4 d-grid">
                                            <button class="btn btn-primary waves-effect waves-light" type="submit">Register</button>
                                        </div>

                                        <div class="mt-4 text-center">
                                            <h5 class="font-size-14 mb-3">Sign up using</h5>
            
                                            <ul class="list-inline">
                                                <li class="list-inline-item">
                                                    <Link to="/" class="social-list-item bg-primary text-white border-primary">
                                                        <i class="mdi mdi-facebook"></i>
                                                    </Link>
                                                </li>
                                                <li class="list-inline-item">
                                                    <Link to="/" class="social-list-item bg-info text-white border-info">
                                                        <i class="mdi mdi-twitter"></i>
                                                    </Link>
                                                </li>
                                                <li class="list-inline-item">
                                                    <Link to="/" class="social-list-item bg-danger text-white border-danger">
                                                        <i class="mdi mdi-google"></i>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                
                                        <div class="mt-4 text-center">
                                            <p class="mb-0">By registering you agree to the Skote <Link to="#" class="text-primary">Terms of Use</Link></p>
                                        </div>
                                    </form>
                                </div>
            
                            </div>
                        </div>
                        <div class="mt-5 text-center">
                            
                            <div>
                                <p>Already have an account ? <Link to="/" class="fw-medium text-primary"> Login</Link> </p>
                                <p>© <script>document.write(new Date().getFullYear())</script> Skote. Crafted with <i class="mdi mdi-heart text-danger"></i> by Themesbrand</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}
