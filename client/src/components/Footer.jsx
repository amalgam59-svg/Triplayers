function Footer() {
    return (
        <footer className="bg-dark text-white py-4 mt-5">
            <div className="container">

                <div className="row">

                    <div className="col-md-4">
                        <h5>TripLayers</h5>
                        <p>
                            Discover stays and travel experiences
                            around the world.
                        </p>
                    </div>

                    <div className="col-md-4">
                        <h5>Explore</h5>
                        <p>Properties</p>
                        <p>Community</p>
                        <p>My Bookings</p>
                    </div>

                    <div className="col-md-4">
                        <h5>Support</h5>
                        <p>Contact</p>
                        <p>Privacy</p>
                        <p>Terms</p>
                    </div>

                </div>

                <hr />

                <p className="text-center mb-0">
                    © 2026 TripLayers
                </p>

            </div>
        </footer>
    );
}

export default Footer;