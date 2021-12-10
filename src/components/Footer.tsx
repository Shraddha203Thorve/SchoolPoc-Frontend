import React from 'react'

const Footer = () => {
    return (
        <div className="mt-2">
            <footer className=" page-footer font-small blue pt-4 back "  >
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className="align col-md-4 mt-md-0 mt-3">
                            <h5 className="text-uppercase">Phone</h5>
                            <p>PRE-PRIMARY</p>
                            <p>986004354/020-495966</p>
                            <p>PRIMARY AND SECONDARY</p>
                            <p>020-223234/983045697</p>
                        </div>

                        <hr className="clearfix w-100 d-md-none pb-0" />

                        <div className="align col-md-4 mt-md-0 mt-3">
                            <h5 className="text-uppercase">Email</h5>
                            <p>PRE-PRIMARY</p>
                            <p>icps.preprimary@learningcurve.in</p>
                            <p>SECONDARY</p>
                            <p>icps.primary@learningcurve.in</p>
                        </div>

                        <div className="align col-md-4 mt-md-0 mt-3">
                            <h5 className="text-uppercase">ADDRESS</h5>
                            <p>Hinjawadi Phase 1 Rd, Phase 1, Hinjewadi Rajiv Gandhi Infotech Park, Hinjawadi, Pune, Maharashtra 411057</p>

                        </div>
                    </div>
                    <div className="footer-copyright text-center py-3 grey-back">
                        Copyright &copy; 2021 Learning Curve Public School
                    </div>
                </div>

            </footer>
        </div>
    )
}

export default Footer
