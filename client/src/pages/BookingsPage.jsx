function BookingsPage() {
    const bookings = [
        {
            id: 1001,
            property: "Waterfront Suite",
            checkIn: "2026-09-10",
            checkOut: "2026-09-14",
            status: "Confirmed"
        },
        {
            id: 1002,
            property: "Old Montreal Loft",
            checkIn: "2026-10-05",
            checkOut: "2026-10-07",
            status: "Pending"
        }
    ];

    const confirmCancel = (bookingId) => {
        if (window.confirm("Are you sure you want to cancel this booking?")) {
            alert(`Booking ${bookingId} has been canceled.`);
        }
    };

    return (
        <main className="container my-5">
            <h1 className="mb-4">My bookings</h1>
            <div className="list-group">
                {bookings.map((booking) => (
                    <div key={booking.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                            <h5 className="mb-1">{booking.property}</h5>
                            <p className="mb-1">
                                Check-in: {booking.checkIn} · Check-out: {booking.checkOut}
                            </p>
                            <small>Status: {booking.status}</small>
                        </div>
                         <a href="booking-details.html?bookingId=12346" className="btn btn-info btn-sm">View</a>
                         <a href="edit-booking.html?bookingId=12346" className="btn btn-warning btn-sm">Modify</a>
                        <button
                            type="button"
                            className="btn btn-danger btn-sm"
                            onClick={() => confirmCancel(booking.id)}
                        >
                            Cancel
                        </button>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default BookingsPage;
