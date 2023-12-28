/*WordPress*/

/*Library*/
import { PortalWithState } from 'react-portal';

import classnames from 'classnames';

/*Inbuilt*/
import { AtrcWrap } from '../../atoms';

import { AtrcSidebar } from '../index';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const AtrcFloatingSidebar = (props) => {
	const {
		onToggle = false,
		onClose = false,
		direction = 'right',
		className = '',
		variant = '' /*over and push*/,
		children = '',
		renderToggle = (args) => {},
		renderContent = (args) => {},
		...defaultProps
	} = props;

	return (
		<AtrcWrap
			className={classnames(
				AtrcPrefix('sidebar-icon'),
				direction ? AtrcPrefix('side-nav') + direction : ''
			)}
			{...defaultProps}>
			<PortalWithState
				closeOnOutsideClick
				closeOnEsc>
				{({ openPortal, closePortal, isOpen, portal }) => {
					const toggle = () => {
						if (isOpen) {
							closePortal();
						} else {
							openPortal();
						}
					};
					const args = {
						isOpen,
						openPortal,
						onToggle: toggle,
						onClose: closePortal,
					};

					return (
						<>
							{renderToggle(args)}
							{portal(
								<AtrcSidebar
									variant='floating'
									className='at-pos at-z-idx at-w at-h at-bg-cl at-p at-box-sdw'
									direction={direction}>
									{renderContent(args)}
								</AtrcSidebar>
							)}
						</>
					);
				}}
			</PortalWithState>
		</AtrcWrap>
	);
};
export default AtrcFloatingSidebar;
