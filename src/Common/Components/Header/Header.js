import React from 'react'
import { Link } from 'react-router-dom'


export default function Header() {
    return (
        <React.Fragment>
            <div id="layout-wrapper">
            <header id="page-topbar">
                    <div className="navbar-header">
                        <div className="d-flex">
                            {/* LOGO */}
                            <div className="navbar-brand-box">
                                <Link to="/" className="logo logo-dark">
                                    <span className="logo-sm">
                                        <img src="assets/images/logo-1.png" alt="" height="22" />
                                    </span>
                                    <span className="logo-lg">
                                        <img src="assets/images/logo-1.png" alt="" height="17" />
                                    </span>
                                </Link>

                                <Link to="/" className="logo logo-light">
                                    <span className="logo-sm">
                                        <img src="assets/images/logo-1.png" alt="" height="22" />
                                    </span>
                                    <span className="logo-lg">
                                        <img src="assets/images/logo-1.png" alt="" height="19" />
                                    </span>
                                </Link>
                            </div>
                            <button type="button" className="btn btn-sm px-3 font-size-16 header-item waves-effect"
                                id="vertical-menu-btn">
                                <i className="fa fa-fw fa-bars"></i>
                            </button>
                            {/* App Search*/}
                            <form className="app-search d-none d-lg-block">
                                <div className="position-relative">
                                    <input type="text" className="form-control" placeholder="Search..." />
                                    <span className="bx bx-search-alt"></span>
                                </div>
                            </form>
                        </div>

                        <div className="d-flex">

                            <div className="dropdown d-inline-block d-lg-none ms-2">
                                <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-search-dropdown"
                                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="mdi mdi-magnify"></i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                                    aria-labelledby="page-header-search-dropdown">

                                    <form className="p-3">
                                        <div className="form-group m-0">
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username" />
                                                <div className="input-group-append">
                                                    <button className="btn btn-primary" type="submit"><i className="mdi mdi-magnify"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="dropdown d-inline-block">
                                <button type="button" className="btn header-item waves-effect"
                                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img id="header-lang-img" src="assets/images/flags/us.jpg" alt="Header Language" height="16" />
                                </button>
                                <div className="dropdown-menu dropdown-menu-end">

                                    {/* item */}
                                    <Link to="/" className="dropdown-item notify-item language" data-lang="en">
                                        <img src="assets/images/flags/us.jpg" alt="user-image" className="me-1" height="12" /> <span className="align-middle">English</span>
                                    </Link>
                                    {/* item */}
                                    <Link to="/" className="dropdown-item notify-item language" data-lang="sp">
                                        <img src="assets/images/flags/spain.jpg" alt="user-image" className="me-1" height="12" /> <span className="align-middle">Spanish</span>
                                    </Link>

                                    {/* item */}
                                    <Link to="/" className="dropdown-item notify-item language" data-lang="gr">
                                        <img src="assets/images/flags/germany.jpg" alt="user-image" className="me-1" height="12" /> <span className="align-middle">German</span>
                                    </Link>

                                    {/* item */}
                                    <Link to="/" className="dropdown-item notify-item language" data-lang="it">
                                        <img src="assets/images/flags/italy.jpg" alt="user-image" className="me-1" height="12" /> <span className="align-middle">Italian</span>
                                    </Link>

                                    {/* item */}
                                    <Link to="/" className="dropdown-item notify-item language" data-lang="ru">
                                        <img src="assets/images/flags/russia.jpg" alt="user-image" className="me-1" height="12" /> <span className="align-middle">Russian</span>
                                    </Link>
                                </div>
                            </div>

                            <div className="dropdown d-none d-lg-inline-block ms-1">
                                <button type="button" className="btn header-item noti-icon waves-effect"
                                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="bx bx-customize"></i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                                    <div className="px-lg-2">
                                        <div className="row g-0">
                                            <div className="col">
                                                <Link className="dropdown-icon-item" to="#">
                                                    <img src="assets/images/brands/github.png" alt="Github" />
                                                    <span>GitHub</span>
                                                </Link>
                                            </div>
                                            <div className="col">
                                                <Link className="dropdown-icon-item" to="#">
                                                    <img src="assets/images/brands/bitbucket.png" alt="bitbucket" />
                                                    <span>Bitbucket</span>
                                                </Link>
                                            </div>
                                            <div className="col">
                                                <Link className="dropdown-icon-item" to="#">
                                                    <img src="assets/images/brands/dribbble.png" alt="dribbble" />
                                                    <span>Dribbble</span>
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="row g-0">
                                            <div className="col">
                                                <Link className="dropdown-icon-item" to="#">
                                                    <img src="assets/images/brands/dropbox.png" alt="dropbox" />
                                                    <span>Dropbox</span>
                                                </Link>
                                            </div>
                                            <div className="col">
                                                <Link className="dropdown-icon-item" to="#">
                                                    <img src="assets/images/brands/mail_chimp.png" alt="mail_chimp" />
                                                    <span>Mail Chimp</span>
                                                </Link>
                                            </div>
                                            <div className="col">
                                                <Link className="dropdown-icon-item" to="#">
                                                    <img src="assets/images/brands/slack.png" alt="slack" />
                                                    <span>Slack</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="dropdown d-none d-lg-inline-block ms-1">
                                <button type="button" className="btn header-item noti-icon waves-effect" data-bs-toggle="fullscreen">
                                    <i className="bx bx-fullscreen"></i>
                                </button>
                            </div>

                            <div className="dropdown d-inline-block">
                                <button type="button" className="btn header-item waves-effect" id="page-header-user-dropdown"
                                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img className="rounded-circle header-profile-user" src="assets/images/users/avatar-1.jpg" alt="Header Avatar" />
                                    <span className="d-none d-xl-inline-block ms-1" key="t-henry">Henry</span>
                                    <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end">
                                    {/* item */}
                                    <Link className="dropdown-item" to="#"><i className="bx bx-user font-size-16 align-middle me-1"></i> <span key="t-profile">Profile</span></Link>
                                    <Link className="dropdown-item" to="#"><i className="bx bx-wallet font-size-16 align-middle me-1"></i> <span key="t-my-wallet">My Wallet</span></Link>
                                    <Link className="dropdown-item d-block" to="#"><span className="badge bg-success float-end">11</span><i className="bx bx-wrench font-size-16 align-middle me-1"></i> <span key="t-settings">Settings</span></Link>
                                    <Link className="dropdown-item" to="#"><i className="bx bx-lock-open font-size-16 align-middle me-1"></i> <span key="t-lock-screen">Lock screen</span></Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item text-danger" to="/"><i className="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i> <span key="t-logout">Logout</span></Link>
                                </div>
                            </div>

                            <div className="dropdown d-inline-block">
                                <button type="button" className="btn header-item noti-icon right-bar-toggle waves-effect">
                                    <i className="bx bx-cog bx-spin"></i>
                                </button>
                            </div>

                        </div>

                    </div>
                </header>

            </div>
        </React.Fragment>
    )
}
