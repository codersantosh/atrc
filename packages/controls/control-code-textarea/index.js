/*Value Structure
Type string
**/

/*WordPress*/
import { __ } from '@wordpress/i18n';

import { useEffect, useState, useRef, useCallback } from '@wordpress/element';

import { debounce } from '@wordpress/compose';

/*Library*/
import classnames from 'classnames';

import deepmerge from 'deepmerge';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';
import AtrcLabel from '../../atoms/label';

/* Molecules */
import AtrcNotice from '../../molecules/notice';

/* Utils */
import AtrcUseInstanceId from '../../utils/use-instance-id';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';
import AtrcPreTemplate1 from '../../templates/components/pre/template-1';
import AtrcPanelRow from './../../molecules/panel-row/index';

/*Local*/
const EditorNotice = () => {
	if (typeof wp !== 'undefined' && wp.codeEditor) {
		return null;
	}
	return (
		<AtrcPanelRow>
			<AtrcNotice isDismissible={false}>
				{__('Add following scripts:', 'atrc-prefix-atrc')}
				<AtrcPreTemplate1>
					wp_enqueue_code_editor( array( 'type' => 'text/css' ) );
					wp_enqueue_script('wp-theme-plugin-editor');
					wp_enqueue_style('wp-codemirror');
				</AtrcPreTemplate1>
			</AtrcNotice>
		</AtrcPanelRow>
	);
};
const CodeEditor = (props) => {
	const {
		label = '',
		className = '',
		variant = '',
		editorValue,
		onChange,
		editorSettings,
		editorNotice,
		...defaultProps
	} = props;

	const [value, setValue] = useState(editorValue);
	const [codeMirror, setCodeMirror] = useState(null);

	const instanceId = AtrcUseInstanceId(CodeEditor, 'control-code-textarea');

	const debouncedOnChange = useRef(
		debounce(
			(val) => {
				onChange(val);
			},
			500,
			{ leading: true }
		)
	);

	const onChangeHandler = useCallback((editor) => {
		const val = editor.getValue ? editor.getValue() : editor.target.value;
		setValue(val);
		debouncedOnChange.current(val);
	}, []);

	/*Initialize CodeMirror*/
	useEffect(() => {
		if (typeof wp !== 'undefined' && wp.codeEditor) {
			const { defaultSettings, initialize } = wp.codeEditor;

			if (initialize) {
				const codeM = initialize(
					instanceId,
					deepmerge(defaultSettings, editorSettings)
				);
				setCodeMirror(codeM);
				codeM.codemirror.on('change', onChangeHandler);
			}

			return () => {
				debouncedOnChange?.current?.cancel();
				codeMirror?.codemirror.off('change', onChangeHandler);
			};
		}
	}, []);

	return (
		<AtrcWrap
			className={classnames(
				AtrcPrefix('ctrl-code-txt-area'),
				className,
				variant ? AtrcPrefix('ctrl-code-txt-area') + '-' + variant : ''
			)}
			{...defaultProps}>
			{label ? <AtrcLabel>{label}</AtrcLabel> : null}
			{editorNotice ? <EditorNotice /> : null}
			<AtrcPanelRow>
				<textarea
					id={instanceId}
					value={value}
					onChange={onChangeHandler}
				/>
			</AtrcPanelRow>
		</AtrcWrap>
	);
};

/* Specialy for WordPress environment, since we are not using npm code mirror */
const AtrcControlCodeTextarea = (props) => {
	const {
		value = '',
		onChange = () => {},
		editorSettings = {
			indentUnit: 2,
			tabSize: 2,
			mode: 'css',
		},
		editorNotice = true,
		...defaultProps
	} = props;

	return (
		<CodeEditor
			editorValue={value}
			onChange={onChange}
			editorSettings={editorSettings}
			editorNotice={editorNotice}
			{...defaultProps}
		/>
	);
};
export default AtrcControlCodeTextarea;
