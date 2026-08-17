import { useState } from "react";
import { Link } from "react-router-dom";

function LoginPage() {

    const [email, setEmail] =
        useState("");

    const [password, setPassword] =
        useState("");

    const handleSubmit = (event) => {

        event.preventDefault();

        console.log({
            email,
            password
        });

    };

    return (

        <main
            className="
                d-flex
                justify-content-center
                align-items-center
                py-5
            "
        >

            <div
                className="card p-4 shadow"
                style={{
                    width: "100%",
                    maxWidth: "420px"
                }}
            >

                <h2>
                    Login
                </h2>

                <form onSubmit={handleSubmit}>

                    <div className="mb-3">

                        <label className="form-label">
                            Email
                        </label>

                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(event) =>
                                setEmail(
                                    event.target.value
                                )
                            }
                        />

                    </div>

                    <div className="mb-3">

                        <label className="form-label">
                            Password
                        </label>

                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(event) =>
                                setPassword(
                                    event.target.value
                                )
                            }
                        />

                    </div>

                    <button
                        className="btn btn-primary w-100"
                    >
                        Login
                    </button>

					<p className="text-center">
						Don't have an account? <Link to="/signup" className="text-primary">Sign Up</Link>
					</p>
                </form>

            </div>

        </main>

    );

}

export default LoginPage;