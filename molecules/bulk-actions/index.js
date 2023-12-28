/*Library*/
import classnames from "classnames";

/*Inbuilt*/
import {
    AtrcWrap
} from "../../atoms";

/*Inbuilt*/
import AtrcPrefix from "../../prefix-vars";

/*Local Components*/
const AtrcBulkActions = (props) => {

    const {
        className = '',
        children='',
        ...defaultProps
    } = props;
    return (
        <AtrcWrap
            className={
                classnames(
                    AtrcPrefix('bulk-actions'),
                    className,
                )
            }
            {...defaultProps}
        >
            {children}
        </AtrcWrap>
    );
};

export default AtrcBulkActions;