/* WordPress */
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/* Library */
import { action } from '@storybook/addon-actions';

/* Atrc */
import {
    AtrcText,
    AtrcControlAudio,
    AtrcControlDropdownAudio,
    AtrcWireFrameContentSidebar,
    AtrcPreTemplate1,
    AtrcAudio,
    AtrcNotice,
} from '../../packages';

export default {
    title: 'Controls/AtrcControlAudio',
    component: AtrcControlAudio,
    tags: ['autodocs'],
    argTypes: {
        onChange: { action: 'onChange' },
    },
    args: {
        value: {
            frm: '',
            id: 0,
            url: '',
            autoplay: '',
            ctrl: '',
            loop: '',
            muted: '',
            preload: '',
            ctrlLs: '',
        },
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
        <AtrcControlAudio
            value={value}
            onChange={handleChange}
        />
    );
};

export const Default = Template.bind({});

export const Audio = () => {
    const [value, setValue] = useState({
        frm: '',
        id: 0,
        url: '',
        autoplay: '',
        ctrl: '',
        loop: '',
        muted: '',
        preload: '',
        ctrlLs: '',
    });

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <AtrcWireFrameContentSidebar
            renderContent={
                <>
                    <AtrcControlAudio
                        value={value}
                        onChange={handleChange}
                    />
                    <AtrcText tag='h3'>{__('Audio', 'atrc-prefix-atrc')}</AtrcText>
                    <AtrcAudio {...value} />
                </>
            }
            renderSidebar={
                <>
                    <AtrcText tag='h3'>{__('Value', 'atrc-prefix-atrc')}</AtrcText>
                    <AtrcPreTemplate1 content={JSON.stringify(value, null, 2)} />
                </>
            }
            sidebarProps={{ sidebarCol: 'at-col-6' }}
            contentProps={{ contentCol: 'at-col-6' }}
        />
    );
};

export const DropdownAudio = () => {
    const [value, setValue] = useState({
        frm: '',
        id: 0,
        url: '',
        autoplay: '',
        ctrl: '',
        loop: '',
        muted: '',
        preload: '',
        ctrlLs: '',
    });

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <AtrcWireFrameContentSidebar
            renderContent={
                <>
                    <AtrcControlDropdownAudio
                        value={value}
                        onChange={handleChange}
                    />
                    <AtrcNotice isDismissible={false}>
                        {__('Used on Block Editor', 'atrc-prefix-atrc')}
                    </AtrcNotice>
                    <AtrcText tag='h3'>{__('Audio', 'atrc-prefix-atrc')}</AtrcText>
                    <AtrcAudio {...value} />
                </>
            }
            renderSidebar={
                <>
                    <AtrcText tag='h3'>{__('Value', 'atrc-prefix-atrc')}</AtrcText>
                    <AtrcPreTemplate1 content={JSON.stringify(value, null, 2)} />
                </>
            }
            sidebarProps={{ sidebarCol: 'at-col-6' }}
            contentProps={{ contentCol: 'at-col-6' }}
        />
    );
};
