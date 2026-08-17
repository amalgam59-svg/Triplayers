import { useState } from "react";

function SearchForm() {

    const [location, setLocation] =
        useState("");

    const [guests, setGuests] =
        useState(1);

    const handleSubmit = (event) => {

        event.preventDefault();

        console.log({
            location,
            guests
        });

    };

    return (

        <section className="bg-light p-4 rounded shadow-sm">

            <h2>
                Find Your Perfect Stay
            </h2>

            <form onSubmit={handleSubmit}>

                <div className="row">

                    <div className="col-md-6 mb-3">

                        <label className="form-label">
                            Destination
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            value={location}
                            onChange={(event) =>
                                setLocation(
                                    event.target.value
                                )
                            }
                        />

                    </div>

                    <div className="col-md-3 mb-3">

                        <label className="form-label">
                            Guests
                        </label>

                        <input
                            type="number"
                            min="1"
                            className="form-control"
                            value={guests}
                            onChange={(event) =>
                                setGuests(
                                    event.target.value
                                )
                            }
                        />

                    </div>

                    <div className="col-md-3 d-flex align-items-end mb-3">

                        <button
                            className="btn btn-primary w-100"
                        >
                            Search
                        </button>

                    </div>

                </div>

            </form>

        </section>
    );
}

export default SearchForm;