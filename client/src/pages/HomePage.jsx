import SearchForm from "../components/SearchForm";
import PropertyCard from "../components/PropertyCard";
import { properties } from "../data/properties";

function HomePage() {
    return (
        <main className="container my-5">

            <section className="text-center mb-5">

                <h1>
                    Discover Your Next Layer
                </h1>

                <p>
                    Find places, plan stays and discover
                    travel experiences with TripLayers.
                </p>

            </section>

            <SearchForm />

            <section className="mt-5">

                <h2>Featured Properties</h2>

                <div className="row">

                    {properties.slice(0, 3).map((property) => (

                        <PropertyCard
                            key={property.id}
                            property={property}
                        />

                    ))}

                </div>

            </section>

        </main>
    );
}

export default HomePage;