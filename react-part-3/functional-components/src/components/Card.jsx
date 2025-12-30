const Card = () => {
    return (
        <div className="card">
            <div className="card-image gradient-1"></div>
            <div className="card-content">
                <h2>Component Basics</h2>
                <p>Functional components are Javascript functions that return JSX.</p>
                <button className="card-btn">Learn More</button>
            </div>
        </div>
    );
};

export default Card;
