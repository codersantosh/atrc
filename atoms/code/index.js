/*Library*/
import classnames from "classnames";

/*Inbuilt*/
import AtrcPrefix from "../../prefix-vars";

/*Local Components*/
const AtrcCode = (props) => {
    const {
        className = '',
        variant = '',
        children = '',
        ...defaultProps
    } = props;

    return (
        <code
            className={
                classnames(
                    AtrcPrefix('code'),
                    className,
                    variant?AtrcPrefix('code')+'-'+variant:'',
                )
            }
            {...defaultProps}
        >
            {children}
        </code>
    )
}
export default AtrcCode;