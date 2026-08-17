function PostDetailsPage() {
    
    return (
        <>
            <main class="container my-5">

        <section class="property-details">
            <div class="property-header">
                <img src="https://via.placeholder.com/1200x600" alt="Property Image" />
                <h1 class="property-title">Luxury Apartment in City Center</h1>
                <p class="text-muted">$120 per night</p>
            </div>
            <div class="property-description">
                <h2>Description</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut turpis et dolor lacinia interdum. Vivamus non ex in dui interdum auctor vel in dui. Fusce vitae eros id odio auctor tristique vel ut tortor. Morbi in semper turpis. Integer ut nunc in felis rhoncus aliquam. Ut auctor mi id libero cursus tempor.</p>

                <h2>Amenities</h2>
                <ul class="list-unstyled amenities-list">
                    <li><i class="fas fa-wifi"></i> Free Wi-Fi</li>
                    <li><i class="fas fa-parking"></i> Free Parking</li>
                    <li><i class="fas fa-swimming-pool"></i> Swimming Pool</li>
                    <li><i class="fas fa-gym"></i> Fitness Center</li>
                    <li><i class="fas fa-paw"></i> Pet-Friendly</li>
                </ul>
            </div>
            

            <section class="booking-form">
                <h2>Book Your Stay</h2>
                <form>
                    <div class="row">
                        <div class="col-md-4 mb-3">
                            <input type="text" class="form-control" placeholder="Name"/>
                        </div>
                        <div class="col-md-4 mb-3">
                            <input type="email" class="form-control" placeholder="Email"/>
                        </div>
                        <div class="col-md-4 mb-3">
                            <input type="text" class="form-control" placeholder="Phone Number"/>
                        </div>
                        <div class="col-md-3 mb-3">
                            <input type="date" class="form-control" placeholder="Check-in Date"/>
                        </div>
                        <div class="col-md-3 mb-3">
                            <input type="date" class="form-control" placeholder="Check-out Date"/>
                        </div>
                        <div class="col-md-3 mb-3">
                            <select class="form-select" aria-label="Guests">
                                <option selected>Guests</option>
                                <option value="1">1 Guest</option>
                                <option value="2">2 Guests</option>
                                <option value="3">3 Guests</option>
                                <option value="4">4 Guests</option>
                                <option value="5">5 Guests</option>
                            </select>
                        </div>
                        <div class="col-12 mb-3">
                            <button type="submit" class="btn btn-primary w-100">Book Now</button>
                        </div>
                    </div>
                </form>
            </section>
        </section>
    </main>
        </>
    );
};
export default PostDetailsPage;