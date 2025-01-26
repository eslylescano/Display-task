import './SubmitButton.css';
const SubmitButton = ({ onClick, disabled, label }) => {
    return (
        <button
            className="submit-button"
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

export default SubmitButton;