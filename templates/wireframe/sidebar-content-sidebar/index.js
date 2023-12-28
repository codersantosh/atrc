/*Library*/
import classnames from "classnames";

/*Inbuilt*/
import {
    AtrcWrap
} from "../../../atoms";

/*Prefix*/
import {
    AtrcSidebar
} from "../../../organisms";

/*Local*/
const AtColumn = (props) => {
    const {
        renderSidebarLeft = null,
        renderSidebarRight = null,
        renderContent = null,
        sidebarLeftProps = {},
        sidebarRightProps = {},
        contentProps = {},
    } = props;

    const {
        contentCol = '',
        ...contentDefaultProps
    } = contentProps;

    return(
        <>
            <AtrcSidebar
                {...sidebarLeftProps}
                className={
                    classnames(
                        sidebarLeftProps.sidebarCol || 'at-col-1',
                        sidebarLeftProps.className || ''
                    )
                }

            >
                {renderSidebarLeft}
            </AtrcSidebar>
            <AtrcWrap
                tag='section'
                {...contentDefaultProps}
                className={
                    classnames(
                        contentCol || 'at-col-10',
                        contentDefaultProps.className || ''
                    )
                }
            >
                {renderContent}
            </AtrcWrap>
            <AtrcSidebar
                {...sidebarRightProps}
                className={
                    classnames(
                        sidebarRightProps.sidebarCol || 'at-col-1',
                        sidebarRightProps.className || ''
                    )
                }

            >
                {renderSidebarRight}
            </AtrcSidebar>
        </>
    )


}

const AtRow = (props) => {
    const {
        allowRow = true,
        rowProps = {},
        ...defaultProps
    } = props;
    if( allowRow ){
        const {
            className = '',
            ...rowDefaultProps
        } = rowProps;

        return (
            <AtrcWrap
                className={
                    classnames(
                        'at-row',
                        className
                    )
                }
                {...rowDefaultProps}
            >
                <AtColumn
                    {...defaultProps}
                />
            </AtrcWrap>
        );
    }

    return (
        <AtColumn
            {...defaultProps}
        />
    )
}

const AtrcWireFrameSidebarContentSidebar = (props) => {
    const {
        wrapProps = null,
        ...defaultProps
    } = props;

    if( wrapProps ){
        return (
            <AtrcWrap
                {...wrapProps}
            >
                <AtRow
                    {...defaultProps}
                />
            </AtrcWrap>
        )
    }
    return (
        <AtRow
            {...defaultProps}
        />
    )
};

export default AtrcWireFrameSidebarContentSidebar;