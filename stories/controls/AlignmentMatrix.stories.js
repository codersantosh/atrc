/* WordPress */
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/* Library */
import { action } from '@storybook/addon-actions';
import classnames from 'classnames';

/* Atrc */
import {
    AtrcText,
    AtrcControlAlignmentMatrix,
    AtrcWireFrameContentSidebar,
    AtrcPreTemplate1,
} from '../../packages';

export default {
    title: 'Controls/AtrcControlAlignmentMatrix',
    component: AtrcControlAlignmentMatrix,
    tags: ['autodocs'],
    argTypes: {
        onChange: { action: 'onChange' },
    },
    args: {
        value: 'center center',
    },
};

const Template = (args) => {
    const [value, setValue] = useState(args.value);

    const handleChange = (newValue) => {
        setValue(newValue);
        args.onChange(newValue);
        action('onChange')(newValue);
    };

    return (
        <AtrcControlAlignmentMatrix
            value={value}
            onChange={handleChange}
        />
    );
};

export const Default = Template.bind({});

export const Example = () => {
    const [value, setValue] = useState('center center');

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <AtrcWireFrameContentSidebar
            renderContent={
                <>
                    <AtrcControlAlignmentMatrix
                        value={value}
                        onChange={handleChange}
                    />
                </>
            }
            renderSidebar={
                <>
                    <AtrcText
                        tag='h3'
                        className={classnames('at-m')}>
                        {__('Value', 'atrc-prefix-atrc')}
                    </AtrcText>
                    <AtrcPreTemplate1 content={JSON.stringify(value, null, 2)} />
                </>
            }
            sidebarProps={{ sidebarCol: 'at-col-6' }}
            contentProps={{ contentCol: 'at-col-6' }}
        />
    );
};
