/*Library*/
import classnames from "classnames";

/*Inbuilt*/
import AtrcPrefix from "../../prefix-vars";

/*Local Component*/
const AtrcFieldset = (props) => {

    const {
        className = '',
        variant = '',
        children = '',
        ...defaultProps
    } = props;

    return (
        <fieldset
            className={
                classnames(
                    AtrcPrefix('fieldset'),
                    className,
                    variant?AtrcPrefix('fieldset')+'-'+variant:'',
                )
            }
            {...defaultProps}
        >
            {children}
        </fieldset>
    )
}
export default AtrcFieldset