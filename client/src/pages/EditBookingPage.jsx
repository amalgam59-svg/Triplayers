function EditBookingPage() {
    const bookingId = "12345";

    const confirmCancel = (id) => {
        if (window.confirm(`Are you sure you want to cancel booking ${id}?`)) {
            alert(`Booking ${id} has been canceled.`);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Booking details updated successfully!");
    };

    return (
        <main className="container my-5">
            <h2 className="text-center text-primary mb-4">Edit Booking</h2>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">
                        Booking ID: <span id="booking-id">{bookingId}</span>
                    </h4>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="hotel-name" className="form-label">Hotel Name</label>
                            <input type="text" className="form-control" id="hotel-name" value="Grand Plaza Hotel" readOnly />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="check-in-date" className="form-label">Check-in Date</label>
                            <input type="date" className="form-control" id="check-in-date" value="2024-08-10" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="check-out-date" className="form-label">Check-out Date</label>
                            <input type="date" className="form-control" id="check-out-date" value="2024-08-15" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="number-of-guests" className="form-label">Number of Guests</label>
                            <input type="number" className="form-control" id="number-of-guests" value="2" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="room-type" className="form-label">Room Type</label>
                            <select className="form-select" id="room-type" defaultValue="Deluxe Suite">
                                <option>Deluxe Suite</option>
                                <option>Standard Room</option>
                                <option>Superior Room</option>
                            </select>
                        </div>
                        <div className="text-center mt-4">
                            <button type="submit" className="btn btn-primary">Update Booking</button>
                            <button type="button" className="btn btn-danger ms-2" onClick={() => confirmCancel(bookingId)}>
                                Cancel Booking
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default EditBookingPage;