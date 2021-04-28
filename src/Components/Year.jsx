import { Input, Button } from 'semantic-ui-react'
import propTypes from "prop-types";

const Year = (props) => {
    const { handleChange, yearInput, onButtonClick } = props;

    return (
        <>
            <Input placeholder='2019'
                onChange={handleChange}
                value={yearInput}
            />
            <Button onClick={onButtonClick}>Submit</Button>
        </>
    )
}

Year.propTypes = {
    handleChange: propTypes.func.isRequired,
    yearInput: propTypes.string.isRequired,
    onButtonClick: propTypes.func.isRequired,
};

export default Year