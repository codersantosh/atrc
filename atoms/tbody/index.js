/*Library*/
import classnames from "classnames";

/*Inbuilt*/
import AtrcPrefix from "../../prefix-vars";

/*Local Components*/
const AtrcTbody = (props) =>{
    const {
        className = '',
        variant = '',
        children = '',
        ...defaultProps
    } = props;

    return(
        <tbody
            className={
                classnames(
                    AtrcPrefix('tbody'),
                    className,
                    variant?AtrcPrefix('tbody')+'-'+variant:'',
                )
            }
            {...defaultProps}
        >
            {children}
        </tbody>
    )
}

export default AtrcTbody;