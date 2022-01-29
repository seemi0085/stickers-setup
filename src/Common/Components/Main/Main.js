import React from 'react'
import { Link } from 'react-router-dom'

export default function Main() {
    return (
        <React.Fragment>
            <div className="main-content">

                <div className="page-content">
                    <div className="container-fluid">

                        {/* <!-- start page title --> */}
                        <div className="row">
                            <div className="col-12">
                                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                    <h4 className="mb-sm-0 font-size-18">Dashboard</h4>

                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item"><Link to="/">Dashboards</Link></li>
                                            <li className="breadcrumb-item active">Dashboard</li>
                                        </ol>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* <!-- end page title --> */}

                        <div className="row">
                            <div className="col-xl-4">
                                <div className="card overflow-hidden">
                                    <div className="bg-primary bg-soft">
                                        <div className="row">
                                            <div className="col-7">
                                                <div className="text-primary p-3">
                                                    <h5 className="text-primary">Welcome Back !</h5>
                                                    <p>Skote Dashboard</p>
                                                </div>
                                            </div>
                                            <div className="col-5 align-self-end">
                                                <img src="assets/images/profile-img.png" alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body pt-0">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <div className="avatar-md profile-user-wid mb-4">
                                                    <img src="assets/images/users/avatar-1.jpg" alt="" className="img-thumbnail rounded-circle" />
                                                </div>
                                                <h5 className="font-size-15 text-truncate">Henry Price</h5>
                                                <p className="text-muted mb-0 text-truncate">UI/UX Designer</p>
                                            </div>

                                            <div className="col-sm-8">
                                                <div className="pt-4">

                                                    <div className="row">
                                                        <div className="col-6">
                                                            <h5 className="font-size-15">125</h5>
                                                            <p className="text-muted mb-0">Projects</p>
                                                        </div>
                                                        <div className="col-6">
                                                            <h5 className="font-size-15">$1245</h5>
                                                            <p className="text-muted mb-0">Revenue</p>
                                                        </div>
                                                    </div>
                                                    <div className="mt-4">
                                                        <Link to="/" className="btn btn-primary waves-effect waves-light btn-sm">View Profile <i className="mdi mdi-arrow-right ms-1"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title mb-4">Monthly Earning</h4>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <p className="text-muted">This month</p>
                                                <h3>$34,252</h3>
                                                <p className="text-muted"><span className="text-success me-2"> 12% <i className="mdi mdi-arrow-up"></i> </span> From previous period</p>

                                                <div className="mt-4">
                                                    <Link to="/" className="btn btn-primary waves-effect waves-light btn-sm">View More <i className="mdi mdi-arrow-right ms-1"></i></Link>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="mt-4 mt-sm-0">
                                                    <div id="radialBar-chart" className="apex-charts"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-muted mb-0">We craft digital, graphic and dimensional thinking.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="card mini-stats-wid">
                                            <div className="card-body">
                                                <div className="d-flex">
                                                    <div className="flex-grow-1">
                                                        <p className="text-muted fw-medium">Orders</p>
                                                        <h4 className="mb-0">1,235</h4>
                                                    </div>

                                                    <div className="flex-shrink-0 align-self-center">
                                                        <div className="mini-stat-icon avatar-sm rounded-circle bg-primary">
                                                            <span className="avatar-title">
                                                                <i className="bx bx-copy-alt font-size-24"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card mini-stats-wid">
                                            <div className="card-body">
                                                <div className="d-flex">
                                                    <div className="flex-grow-1">
                                                        <p className="text-muted fw-medium">Revenue</p>
                                                        <h4 className="mb-0">$35, 723</h4>
                                                    </div>

                                                    <div className="flex-shrink-0 align-self-center ">
                                                        <div className="avatar-sm rounded-circle bg-primary mini-stat-icon">
                                                            <span className="avatar-title rounded-circle bg-primary">
                                                                <i className="bx bx-archive-in font-size-24"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card mini-stats-wid">
                                            <div className="card-body">
                                                <div className="d-flex">
                                                    <div className="flex-grow-1">
                                                        <p className="text-muted fw-medium">Average Price</p>
                                                        <h4 className="mb-0">$16.2</h4>
                                                    </div>

                                                    <div className="flex-shrink-0 align-self-center">
                                                        <div className="avatar-sm rounded-circle bg-primary mini-stat-icon">
                                                            <span className="avatar-title rounded-circle bg-primary">
                                                                <i className="bx bx-purchase-tag-alt font-size-24"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- end row --> */}

                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-sm-flex flex-wrap">
                                            <h4 className="card-title mb-4">Email Sent</h4>
                                            <div className="ms-auto">
                                                <ul className="nav nav-pills">
                                                    <li className="nav-item">
                                                        <Link className="nav-link" to="#">Week</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" to="#">Month</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link active" to="#">Year</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div id="stacked-column-chart" className="apex-charts" dir="ltr"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end row --> */}


                        {/* problem */}
                        <div className="row">
                            <div className="col-xl-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title mb-4">Social Source</h4>
                                        <div className="text-center">
                                            <div className="avatar-sm mx-auto mb-4">
                                                <span className="avatar-title rounded-circle bg-primary bg-soft font-size-24">
                                                    <i className="mdi mdi-facebook text-primary"></i>
                                                </span>
                                            </div>
                                            <p className="font-16 text-muted mb-2"></p>
                                            <h5><Link to="/" className="text-dark">Facebook - <span className="text-muted font-16">125 sales</span> </Link></h5>
                                            <p className="text-muted">Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus tincidunt.</p>
                                            <Link to="/" className="text-primary font-16">Learn more <i className="mdi mdi-chevron-right"></i></Link>
                                        </div>
                                        <div className="row mt-4">
                                            <div className="col-4">
                                                <div className="social-source text-center mt-3">
                                                    <div className="avatar-xs mx-auto mb-3">
                                                        <span className="avatar-title rounded-circle bg-primary font-size-16">
                                                            <i className="mdi mdi-facebook text-white"></i>
                                                        </span>
                                                    </div>
                                                    <h5 className="font-size-15">Facebook</h5>
                                                    <p className="text-muted mb-0">125 sales</p>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="social-source text-center mt-3">
                                                    <div className="avatar-xs mx-auto mb-3">
                                                        <span className="avatar-title rounded-circle bg-info font-size-16">
                                                            <i className="mdi mdi-twitter text-white"></i>
                                                        </span>
                                                    </div>
                                                    <h5 className="font-size-15">Twitter</h5>
                                                    <p className="text-muted mb-0">112 sales</p>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="social-source text-center mt-3">
                                                    <div className="avatar-xs mx-auto mb-3">
                                                        <span className="avatar-title rounded-circle bg-pink font-size-16">
                                                            <i className="mdi mdi-instagram text-white"></i>
                                                        </span>
                                                    </div>
                                                    <h5 className="font-size-15">Instagram</h5>
                                                    <p className="text-muted mb-0">104 sales</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title mb-5">Activity</h4>
                                        <ul className="verti-timeline list-unstyled">
                                            <li className="event-list">
                                                <div className="event-timeline-dot">
                                                    <i className="bx bx-right-arrow-circle font-size-18"></i>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 me-3">
                                                        <h5 className="font-size-14">22 Nov <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i></h5>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div>
                                                            Responded to need “Volunteer Activities
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="event-list">
                                                <div className="event-timeline-dot">
                                                    <i className="bx bx-right-arrow-circle font-size-18"></i>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 me-3">
                                                        <h5 className="font-size-14">17 Nov <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i></h5>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div>
                                                            Everyone realizes why a new common language would be desirable... <Link to="/">Read more</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="event-list active">
                                                <div className="event-timeline-dot">
                                                    <i className="bx bxs-right-arrow-circle font-size-18 bx-fade-right"></i>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 me-3">
                                                        <h5 className="font-size-14">15 Nov <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i></h5>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div>
                                                            Joined the group “Boardsmanship Forum”
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="event-list">
                                                <div className="event-timeline-dot">
                                                    <i className="bx bx-right-arrow-circle font-size-18"></i>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 me-3">
                                                        <h5 className="font-size-14">12 Nov <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i></h5>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div>
                                                            Responded to need “In-Kind Opportunity”
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="text-center mt-4"><Link to="/" className="btn btn-primary waves-effect waves-light btn-sm">View More <i className="mdi mdi-arrow-right ms-1"></i></Link></div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        {/* <!-- end row --> */}


                    </div>
                    {/* <!-- container-fluid --> */}
                </div>
                {/* <!-- End Page-content --> */}

                {/* <!-- Transaction Modal --> */}
                <div className="modal fade transaction-detailModal" tabIndex={-1} role="dialog" aria-labelledby="transaction-detailModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="transaction-detailModalLabel">Order Details</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <p className="mb-2">Product id: <span className="text-primary">#SK2540</span></p>
                                <p className="mb-4">Billing Name: <span className="text-primary">Neal Matthews</span></p>

                                <div className="table-responsive">
                                    <table className="table align-middle table-nowrap">
                                        <thead>
                                            <tr>
                                                <th scope="col">Product</th>
                                                <th scope="col">Product Name</th>
                                                <th scope="col">Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">
                                                    <div>
                                                        <img src="assets/images/product/img-7.png" alt="" className="avatar-sm" />
                                                    </div>
                                                </th>
                                                <td>
                                                    <div>
                                                        <h5 className="text-truncate font-size-14">Wireless Headphone (Black)</h5>
                                                        <p className="text-muted mb-0">$ 225 x 1</p>
                                                    </div>
                                                </td>
                                                <td>$ 255</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <div>
                                                        <img src="assets/images/product/img-4.png" alt="" className="avatar-sm" />
                                                    </div>
                                                </th>
                                                <td>
                                                    <div>
                                                        <h5 className="text-truncate font-size-14">Phone patterned cases</h5>
                                                        <p className="text-muted mb-0">$ 145 x 1</p>
                                                    </div>
                                                </td>
                                                <td>$ 145</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <h6 className="m-0 text-right">Sub Total:</h6>
                                                </td>
                                                <td>
                                                    $ 400
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <h6 className="m-0 text-right">Shipping:</h6>
                                                </td>
                                                <td>
                                                    Free
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <h6 className="m-0 text-right">Total:</h6>
                                                </td>
                                                <td>
                                                    $ 400
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- end modal --> */}

                {/* <!-- subscribeModal --> */}
                <div className="modal fade" id="subscribeModal" tabIndex={-1} aria-labelledby="subscribeModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header border-bottom-0">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="text-center mb-4">
                                    <div className="avatar-md mx-auto mb-4">
                                        <div className="avatar-title bg-light rounded-circle text-primary h1">
                                            <i className="mdi mdi-email-open"></i>
                                        </div>
                                    </div>

                                    <div className="row justify-content-center">
                                        <div className="col-xl-10">
                                            <h4 className="text-primary">Subscribe !</h4>
                                            <p className="text-muted font-size-14 mb-4">Subscribe our newletter and get notification to stay update.</p>

                                            <div className="input-group bg-light rounded">
                                                <input type="email" className="form-control bg-transparent border-0" placeholder="Enter Email address" aria-label="Recipient's username" aria-describedby="button-addon2" />

                                                <button className="btn btn-primary" type="button" id="button-addon2">
                                                    <i className="bx bxs-paper-plane"></i>
                                                </button>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- end modal --> */}

                <footer className="footer">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-6">
                                <script>document.write(new Date().getFullYear())</script> © Skote.
                            </div>
                            <div className="col-sm-6">
                                <div className="text-sm-end d-none d-sm-block">
                                    Design & Develop by Themesbrand
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </React.Fragment>
    )
}
