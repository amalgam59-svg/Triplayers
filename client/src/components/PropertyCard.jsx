import { Link } from "react-router-dom";

function PropertyCard({ property }) {

    return (
        <div className="col-md-4 mb-4">

            <div className="card h-100 shadow-sm">

                <img
                    src={property.image}
                    className="card-img-top"
                    alt={property.name}
                />

                <div className="card-body">

                    <h5 className="card-title">
                        {property.name}
                    </h5>

                    <p className="text-muted">
                        {property.location}
                    </p>

                    <p>
                        ${property.price} per night
                    </p>

                    <Link
                        className="btn btn-primary"
                        to={`/properties/${property.id}`}
                    >
                        View Details
                    </Link>

                </div>

            </div>

        </div>
    );
}

export default PropertyCard;