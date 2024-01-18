import './styles/Card.css';

const Card = ({ title, body, href }) => {
    return (
        <li className="link-card">
            <a href={href}>
                <h2>{title}<span>&rarr;</span></h2>
                <p>{body}</p>
            </a>
        </li>
    );
};

export default Card;