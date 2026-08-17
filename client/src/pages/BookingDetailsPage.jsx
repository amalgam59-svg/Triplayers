
function BookingDetailsPage() {
    const bookingId = "12345";

    const confirmCancel = (id) => {
        if (window.confirm(`Are you sure you want to cancel booking ${id}?`)) {
            alert(`Booking ${id} has been canceled.`);
        }
    };

    return (
        <main className="container my-5">
            <h2 className="text-center text-primary mb-4">Booking Details</h2>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Booking ID: <span id="booking-id">{bookingId}</span></h4>
                    <h5 className="card-subtitle mb-2 text-muted">Hotel Information</h5>
                    <p className="card-text"><strong>Hotel Name:</strong> Grand Plaza Hotel</p>
                    <p className="card-text"><strong>Address:</strong> 123 Booking Street, Suite 456, New York, NY 10001</p>

                    <h5 className="card-subtitle mb-2 text-muted">Guest Information</h5>
                    <p className="card-text"><strong>Guest Name:</strong> John Doe</p>
                    <p className="card-text"><strong>Email:</strong> johndoe@example.com</p>
                    <p className="card-text"><strong>Phone:</strong> +1 234 567 890</p>

                    <h5 className="card-subtitle mb-2 text-muted">Booking Details</h5>
                    <p className="card-text"><strong>Check-in Date:</strong> 2024-08-10</p>
                    <p className="card-text"><strong>Check-out Date:</strong> 2024-08-15</p>
                    <p className="card-text"><strong>Number of Guests:</strong> 2 Adults, 1 Child</p>
                    <p className="card-text"><strong>Room Type:</strong> Deluxe Suite</p>

                    <h5 className="card-subtitle mb-2 text-muted">Payment Information</h5>
                    <p className="card-text"><strong>Payment Method:</strong> Credit Card (Visa)</p>
                    <p className="card-text"><strong>Total Amount:</strong> $1,200.00</p>
                    <p className="card-text"><strong>Booking Status:</strong> Confirmed</p>

                    <div className="text-center mt-4">
                        <a href="edit-booking.html?bookingId=12345" className="btn btn-warning">Modify Booking</a>
                        <button className="btn btn-danger ms-2" onClick={() => confirmCancel(bookingId)}>Cancel Booking</button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default BookingDetailsPage;