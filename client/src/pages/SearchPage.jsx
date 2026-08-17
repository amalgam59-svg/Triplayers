import { useState } from "react";

import PropertyCard
    from "../components/PropertyCard";

import { properties }
    from "../data/properties";

function SearchPage() {

    const [search, setSearch] =
        useState("");

    const filteredProperties =
        properties.filter((property) =>

            property.location
                .toLowerCase()
                .includes(
                    search.toLowerCase()
                )

        );

    return (

        <main className="container my-5">

            <h1>
                Search Properties
            </h1>

            <input
                type="text"
                className="form-control mb-4"
                placeholder="Search by city"
                value={search}
                onChange={(event) =>
                    setSearch(
                        event.target.value
                    )
                }
            />

            <div className="row">

                {filteredProperties.length === 0 ? (

                    <p>
                        No properties found.
                    </p>

                ) : (

                    filteredProperties.map(
                        (property) => (

                            <PropertyCard
                                key={property.id}
                                property={property}
                            />

                        )
                    )

                )}

            </div>

        </main>
    );
}

export default SearchPage;
