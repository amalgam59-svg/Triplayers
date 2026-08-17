import { useParams } from "react-router-dom";

import { properties }
    from "../data/properties";

function PropertyDetailsPage() {

    const { id } = useParams();

    const property =
        properties.find(
            (property) =>
                property.id === Number(id)
        );

    if (!property) {

        return (
            <main className="container my-5">

                <h2>
                    Property not found
                </h2>

            </main>
        );

    }

    return (

        <main className="container my-5">

            <img
                src={property.image}
                alt={property.name}
                className="img-fluid rounded mb-4"
            />

            <h1>
                {property.name}
            </h1>

            <h4>
                {property.location}
            </h4>

            <p>
                {property.description}
            </p>

            <h3>
                ${property.price} per night
            </h3>

            <hr />

            <h2>
                Book Your Stay
            </h2>

            <p>
                Booking functionality will
                be added in a future milestone.
            </p>

        </main>

    );

}

export default PropertyDetailsPage;