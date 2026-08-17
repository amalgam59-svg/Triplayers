import { Link } from "react-router-dom";

function SignupPage() {
    return (
        <main className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
            <div className="card p-4 shadow-lg" style={{ width: "100%", maxWidth: "400px" }}>
                <h2 className="text-center text-primary">Sign Up</h2>
                <form action="dashboard.html" method="post">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="name" name="name" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" name="email" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name="password" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" required />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Sign Up</button>
                    <p className="text-center mt-3">
                        Already have an account? <Link to="/login" className="text-primary">Login</Link>
                    </p>
                </form>
            </div>
        </main>
    );
}

export default SignupPage;
