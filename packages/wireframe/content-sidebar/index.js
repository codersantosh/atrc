/*Internal*/
import AtrcWireFrameSidebarContent from '../sidebar-content';

/*Local*/
const AtrcWireFrameContentSidebar = (props) => {
	return (
		<AtrcWireFrameSidebarContent
			{...props}
			contentSidebar={true}
		/>
	);
};

export default AtrcWireFrameContentSidebar;
