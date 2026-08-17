function CommunityPage() {
    return (
        <main className="container my-5">
            <h1 className="mb-4">Community</h1>
            <div className="row g-4">
                <div className="col-md-6">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">Travel stories</h5>
                            <p className="card-text">Read local guides, destination tips, and real stories shared by fellow travelers.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">Discussions</h5>
                            <p className="card-text">Ask questions, share itineraries, and connect with people exploring the same places.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default CommunityPage;
