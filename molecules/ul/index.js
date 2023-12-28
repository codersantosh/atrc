/*Library*/
import classnames from "classnames";

/*Inbuilt*/
import AtrcPrefix from "../../prefix-vars";

const AtrcUl = (
    {
        className,
        variant = '',
        column = '',
        children
    }) =>
{
    return (
        <ul
            className={
                classnames(
                    AtrcPrefix('ul'),
                    className,
                    column?AtrcPrefix('ul-col')+'-'+column:'',
                    variant?AtrcPrefix('ul')+'-'+variant:'',

                )
            }
        >
            {children}
        </ul>
    )
}
export default AtrcUl;