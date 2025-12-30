const Card = (props) => {
    return (
        <div className="card">
            <div className={`card-image ${props.colorParam}`}></div>
            <div className="card-content">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <button className="card-btn">Learn More</button>
            </div>
        </div>
    );
};

export default Card;
