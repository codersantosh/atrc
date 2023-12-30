/* WordPress */
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcWrap from '../../atoms/wrap';

import { AtrcHeaderTitleButton } from '../headers';

import {
	AtrcWireFrameContentSidebar,
	AtrcWireFrameHeaderContentFooter,
} from '../wireframe';

import AtrcNav from './../../molecules/nav';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const AtrcSingle = (props) => {
	const {
		className = '',
		variant = '',
		label,
		right = null,
		...defaultProps
	} = props;

	return (
		<AtrcWrap
			className={classnames(AtrcPrefix('mt-40'), className)}
			{...defaultProps}>
			<AtrcWrap className={classnames(AtrcPrefix('m-0'), 'at-row')}>
				<AtrcWrap className='at-col-1'>
					<AtrcNav
						variant='vrt'
						navs={[
							{
								to: 'menu1',
								children: __('Menu 1', 'atrc-prefix-atrc'),
							},
							{
								to: 'menu2',
								children: __('Menu 2', 'atrc-prefix-atrc'),
							},
						]}
					/>
				</AtrcWrap>

				<AtrcWrap className='at-col-11'>
					<AtrcWrap className={classnames(AtrcPrefix('bg-white'))}>
						<AtrcHeaderTitleButton
							title={'Single'}
							btnProps={{
								children: 'Save',
							}}
						/>
						<AtrcWireFrameContentSidebar
							renderSidebar={
								<>
									Contrary to popular belief, Lorem Ipsum is not simply random
									text. It has roots in a piece of classical Latin literature
									from 45 BC, making it over 2000 years old. Richard McClintock,
									a Latin professor at Hampden-Sydney College in Virginia,
									looked up one of the more obscure Latin words, consectetur,
									from a Lorem Ipsum passage, and going through the cites of the
									word in classical literature, discovered the undoubtable
									source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
									"de Finibus Bonorum et Malorum" (The Extremes of Good and
									Evil) by Cicero, written in 45 BC. This book is a treatise on
									the theory of ethics, very popular during the Renaissance. The
									first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
									comes from a line in section 1.10.32.
								</>
							}
							renderContent={
								<>
									Contrary to popular belief, Lorem Ipsum is not simply random
									text. It has roots in a piece of classical Latin literature
									from 45 BC, making it over 2000 years old. Richard McClintock,
									a Latin professor at Hampden-Sydney College in Virginia,
									looked up one of the more obscure Latin words, consectetur,
									from a Lorem Ipsum passage, and going through the cites of the
									word in classical literature, discovered the undoubtable
									source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
									"de Finibus Bonorum et Malorum" (The Extremes of Good and
									Evil) by Cicero, written in 45 BC. This book is a treatise on
									the theory of ethics, very popular during the Renaissance. The
									first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
									comes from a line in section 1.10.32.
								</>
							}
							contentProps={{
								contentCol: 'at-col-9',
							}}
							sidebarProps={{
								sidebarCol: 'at-col-3',
							}}
							wrapProps={{
								className: AtrcPrefix('p-15'),
							}}
						/>
						<AtrcWireFrameHeaderContentFooter
							renderContent={
								<>
									Contrary to popular belief, Lorem Ipsum is not simply random
									text. It has roots in a piece of classical Latin literature
									from 45 BC, making it over 2000 years old. Richard McClintock,
									a Latin professor at Hampden-Sydney College in Virginia,
									looked up one of the more obscure Latin words, consectetur,
									from a Lorem Ipsum passage, and going through the cites of the
									word in classical literature, discovered the undoubtable
									source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
									"de Finibus Bonorum et Malorum" (The Extremes of Good and
									Evil) by Cicero, written in 45 BC. This book is a treatise on
									the theory of ethics, very popular during the Renaissance. The
									first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
									comes from a line in section 1.10.32.
								</>
							}
							contentProps={{
								contentCol: 'at-col-9',
							}}
							wrapProps={{
								className: AtrcPrefix('p-15'),
							}}
						/>
					</AtrcWrap>
				</AtrcWrap>
			</AtrcWrap>
		</AtrcWrap>
	);
};

export default AtrcSingle;
