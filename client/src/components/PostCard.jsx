import { Link } from "react-router-dom";

function PostCard({ post }) {

    return (

        <article className="card mb-4">

            <img
                src={post.image}
                className="card-img-top"
                alt={post.title}
            />

            <div className="card-body">

                <h3>
                    {post.title}
                </h3>

                <p className="text-muted">
                    By {post.author}
                </p>

                <p>
                    {post.summary}
                </p>

                <Link
                    to={`/posts/${post.id}`}
                    className="btn btn-primary"
                >
                    Read More
                </Link>

            </div>

        </article>

    );

}

export default PostCard;