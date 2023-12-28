/*WordPress*/
import {
    useEffect,
    useState
} from "@wordpress/element";

/*Library*/
import RichTextEditor from 'react-rte';

/*Inbuilt*/
import {
    AtrcWord,
    AtrcInternalCss
} from "../index";

/*Inbuilt*/
import AtrcPrefix from "../../prefix-vars";

/*Local Components*/
const AtrcEditor= (props) => {
    const {
        label,
        value,
        onChange
    } = props;

    const [val, setVal] = useState(value?RichTextEditor.createValueFromString(value,'html'):RichTextEditor.createEmptyValue());

    useEffect(() => {
        if ( !value ) {
            setVal(RichTextEditor.createValueFromString(value,'html'));
        }
    }, [value]);

    const handleChange = (value) => {
        setVal(value);
        onChange(
            value.toString('html')
        );
    };

    const toolbarConfig = {
        // Optionally specify the groups to display (displayed in the order listed).
        display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'LINK_BUTTONS'],
        INLINE_STYLE_BUTTONS: [
            {label: 'Bold', style: 'BOLD'},
            {label: 'Italic', style: 'ITALIC'},
            {label: 'Strikethrough', style: 'STRIKETHROUGH'},
            {label: 'Monospace', style: 'CODE'},
            {label: 'Underline', style: 'UNDERLINE'},
        ],
        BLOCK_TYPE_BUTTONS: [
            {label: 'UL', style: 'unordered-list-item'},
            {label: 'OL', style: 'ordered-list-item'},
            {label: 'Blockquote', style: 'blockquote'},
        ]
    };
    return (
        <>
            <AtrcInternalCss>
                {`
                        .atrc-rte-editor {
                            min-height:50px;
                            .public-DraftEditor-content{
                                min-height:50px;
                            }
                    }
                        .atrc-rte-toolbar{
                            button:disabled{
                                display:none;
                            }
                    }
                    `}
            </AtrcInternalCss>
            <AtrcWord>{label}</AtrcWord>
            <RichTextEditor
                className={
                    classnames(
                        AtrcPrefix('rte'),
                    )
                }
                toolbarClassName={
                    classnames(
                        AtrcPrefix('rte-toolbar'),
                    )
                }
                editorClassName={
                    classnames(
                        AtrcPrefix('rte-editor'),
                    )
                }
                // toolbarClassName='atrc-rte-toolbar'
                // editorClassName='atrc-rte-editor'
                value={val}
                onChange={handleChange}
                toolbarConfig={toolbarConfig}
            />
        </>
    );
};
export default AtrcEditor;