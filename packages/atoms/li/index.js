/*Library*/
import classnames from "classnames";

/*Inbuilt*/
import AtrcPrefix from "../../prefix-vars";

/*Local Components*/
const AtrcLi = (props) => {

    const {
        className = '',
        variant = '',
        hasIcon = false,
        children = '',
        ...defaultProps
    } = props;

    return (
        <li
            className={
                classnames(
                    AtrcPrefix('li'),    
                    className,
                    variant?AtrcPrefix('li')+'-'+variant:'',
                    hasIcon?AtrcPrefix('li-has-icon'):'',
                )
            }
            {...defaultProps}
        >
            {children}
        </li>
    )
}
export default AtrcLi