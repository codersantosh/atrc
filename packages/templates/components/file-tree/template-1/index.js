import React from 'react';

/* WordPress */
import { __ } from '@wordpress/i18n';

/* Library */
import classnames from 'classnames';

/* Atoms */
import AtrcWrap from '../../../../atoms/wrap';
import AtrcText from '../../../../atoms/text';
import { AtrcIconSvg } from '../../../../atoms/icon';
import AtrcLink from '../../../../atoms/link';

/* Molecules */
import AtrcList from '../../../../molecules/list';
import AtrcLi from '../../../../molecules/list/li';

/* Prefix */
import AtrcPrefix from '../../../../prefix-vars';

/* Local */
const FileTree = ({ data, name = '' }) => {
    if (typeof data === 'object' && data.name && data.url) {
        return (
            <AtrcLi className='at-tree-folder-file at-flx at-al-itm-ctr at-gap at-m'>
                <AtrcIconSvg
                    className={classnames('at-tree-folder-file-icon')}
                    svg='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="at-svg" viewBox="0 0 16 16">
                 <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"/></svg>'
                />
                <AtrcLink
                    className={classnames('at-tree-folder-file-lnk')}
                    href={data.url}
                    target='_blank'
                    rel='noopener noreferrer'>
                    {data.name}
                </AtrcLink>
            </AtrcLi>
        );
    }

    if (name) {
        return (
            <>
                <AtrcLi className={classnames('at-tree-folder', 'at-m')}>
                    <AtrcWrap
                        className={classnames(
                            'at-tree-folder-ttl',
                            'at-flx',
                            'at-al-itm-ctr',
                            'at-gap'
                        )}>
                        <AtrcIconSvg
                            className={classnames('at-tree-folder-ttl-icon')}
                            svg='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="at-svg" viewBox="0 0 16 16">
                            <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a2 2 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139q.323-.119.684-.12h5.396z" /></svg>'
                        />

                        <AtrcText
                            tag='h6'
                            className={classnames('at-tree-folder-ttl-txt', 'at-m')}>
                            {name}
                        </AtrcText>
                    </AtrcWrap>

                    <FileTree
                        name=''
                        data={data}
                    />
                </AtrcLi>
            </>
        );
    }

    if (Object.keys(data)) {
        return (
            <AtrcList
                className={classnames(
                    'at-tree',
                    'at-flx',
                    'at-flx-col',
                    'at-gap',
                    'at-m'
                )}>
                {Object.keys(data).map((key) => (
                    <FileTree
                        key={key}
                        name={key}
                        data={data[key]}
                    />
                ))}
            </AtrcList>
        );
    }

    return null;
};
const AtrcFileTreeTemplate1 = (props) => {
    const {
        className = '',
        value,
        rootName = __('Folder', 'atrc-prefix-atrc'),
        ...defaultProps
    } = props;

    return (
        <AtrcWrap
            className={classnames(className, AtrcPrefix('file-tre'), 'at-m')}
            {...defaultProps}>
            {rootName ? (
                <AtrcText
                    tag='h6'
                    className={classnames('at-m', 'at-tree-ttl')}>
                    {rootName}
                </AtrcText>
            ) : null}

            <FileTree data={value} />
        </AtrcWrap>
    );
};

export default AtrcFileTreeTemplate1;
