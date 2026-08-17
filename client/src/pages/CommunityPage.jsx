import { posts }
    from "../data/posts";

import PostCard
    from "../components/PostCard";

function CommunityPage() {

    return (

        <main className="container my-5">

            <h1>
                TripLayers Community
            </h1>

            <p>
                Travel stories, advice
                and experiences from
                other travellers.
            </p>

            {posts.map((post) => (

                <PostCard
                    key={post.id}
                    post={post}
                />

            ))}

        </main>

    );

}

export default CommunityPage;