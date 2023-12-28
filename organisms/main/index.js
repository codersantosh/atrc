/*Library*/
import classnames from "classnames";

/*Inbuilt*/
import AtrcPrefix from "../../prefix-vars";
import {AtrcWrap} from "../../atoms";

/*Local*/
const AtrcMain = (props) => {
    const {
        className = '',
        variant = '',
        children='',
        dangerouslySetInnerHTML='',
        ...defaultProps
    } = props;

    return (
        <AtrcWrap
            tag='main'
            className={
                classnames(
                    AtrcPrefix('main'),
                    className,
                    variant?AtrcPrefix()+variant:'',
                )
            }
            {...defaultProps}
        >
            {children}
        </AtrcWrap>
    )
}
export default AtrcMain;