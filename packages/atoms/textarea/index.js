/*WordPress*/
import {
    TextareaControl,
} from '@wordpress/components';

/*Library*/
import classnames from "classnames";

/*Inbuilt*/
import AtrcPrefix from "../../prefix-vars";

/*Local Components*/
const AtrcTextarea = (props) =>{

    const {
        variant = '',
        className = '',
        ...defaultProps
    } = props;

    return(
        <TextareaControl
            className={
                classnames(
                    AtrcPrefix('textarea'),
                    className,
                    variant?AtrcPrefix('textarea')+'-'+variant:'',
                )
            }
            {...defaultProps}
        />
    )
}

export default AtrcTextarea;