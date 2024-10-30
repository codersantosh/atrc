import React from 'react';

/* WordPress */
import { useState, useEffect, useMemo } from '@wordpress/element';
import { select } from '@wordpress/data';
import { useSetting } from '@wordpress/block-editor';
import { _x } from '@wordpress/i18n';

/* Library */
import { isEmpty } from 'lodash';

/* Local */
export function AtrcUseColorSolids(props = {}) {
    const { useCSSVariables = false } = props;
    const [allSolids, setAllSolids] = useState([]);

    const userPalette = useSetting('color.palette.custom');
    const themePalette = useSetting('color.palette.theme');
    const defaultPalette = useSetting('color.palette.default');
    const shouldDisplayDefaultColors = useSetting('color.defaultPalette');

    return useMemo(() => {
        let themePalatteSolids = [];
        let defaultPaletteSolids = [];
        let userPaletteSolids = [];

        if (themePalette) {
            if (useCSSVariables) {
                themePalatteSolids = themePalette.map((themeColor) => ({
                    name: themeColor.name,
                    color: `var(--wp--preset--color--${themeColor.slug})`,
                }));
            } else {
                themePalatteSolids = [...themePalette];
            }
        }
        if (defaultPalette) {
            if (useCSSVariables) {
                defaultPaletteSolids = defaultPalette.map((themeColor) => ({
                    name: themeColor.name,
                    color: `var(--wp--preset--color--${themeColor.slug})`,
                }));
            } else {
                defaultPaletteSolids = [...defaultPalette];
            }
        }

        if (userPalette) {
            if (useCSSVariables) {
                userPaletteSolids = userPalette.map((themeColor) => ({
                    name: themeColor.name,
                    color: `var(--wp--preset--color--${themeColor.slug})`,
                }));
            } else {
                userPaletteSolids = [...userPalette];
            }
        }

        const result = [];
        if (themePalatteSolids && themePalatteSolids.length) {
            result.push({
                name: _x(
                    'Theme',
                    'Indicates this palette comes from the theme.',
                    'atrc-prefix-atrc'
                ),
                colors: themePalatteSolids,
            });
        }
        if (
            shouldDisplayDefaultColors &&
            defaultPaletteSolids &&
            defaultPaletteSolids.length
        ) {
            result.push({
                name: _x(
                    'Default',
                    'Indicates this palette comes from WordPress.',
                    'atrc-prefix-atrc'
                ),
                colors: defaultPaletteSolids,
            });
        }
        if (userPaletteSolids && userPaletteSolids.length) {
            result.push({
                name: _x(
                    'Custom',
                    'Indicates this palette is created by the user.',
                    'atrc-prefix-atrc'
                ),
                colors: userPaletteSolids,
            });
        }
        return result;
    }, [
        userPalette,
        themePalette,
        defaultPalette,
        shouldDisplayDefaultColors,
    ]);
}

export function AtrcUseColorGradients(props = {}) {
    const { useCSSVariables = true } = props;
    const userGradientPalette = useSetting('color.gradients.custom');
    const themeGradientPalette = useSetting('color.gradients.theme');
    const defaultGradientPalette = useSetting('color.gradients.default');
    const shouldDisplayDefaultGradients = useSetting('color.defaultGradients');

    return useMemo(() => {
        let themeGradientSolids = [];
        let defaultGradientSolids = [];
        let userGradientSolids = [];

        if (themeGradientPalette) {
            if (useCSSVariables) {
                themeGradientSolids = themeGradientPalette.map((gradient) => ({
                    name: gradient.name,
                    gradient: `var(--wp--preset--gradient--${gradient.slug})`,
                }));
            } else {
                themeGradientSolids = [...themeGradientPalette];
            }
        }
        if (defaultGradientPalette) {
            if (useCSSVariables) {
                defaultGradientSolids = defaultGradientPalette.map((gradient) => ({
                    name: gradient.name,
                    gradient: `var(--wp--preset--gradient--${gradient.slug})`,
                }));
            } else {
                defaultGradientSolids = [...defaultGradientPalette];
            }
        }

        if (userGradientPalette) {
            if (useCSSVariables) {
                userGradientSolids = userGradientPalette.map((gradient) => ({
                    name: gradient.name,
                    gradient: `var(--wp--preset--gradient--${gradient.slug})`,
                }));
            } else {
                userGradientSolids = [...userGradientPalette];
            }
        }

        const result = [];
        if (themeGradientSolids && themeGradientSolids.length) {
            result.push({
                name: _x(
                    'Theme',
                    'Indicates this gradient comes from the theme.',
                    'atrc-prefix-atrc'
                ),
                gradients: themeGradientSolids,
            });
        }
        if (
            shouldDisplayDefaultGradients &&
            defaultGradientSolids &&
            defaultGradientSolids.length
        ) {
            result.push({
                name: _x(
                    'Default',
                    'Indicates this gradient comes from WordPress.',
                    'atrc-prefix-atrc'
                ),
                gradients: defaultGradientSolids,
            });
        }
        if (userGradientSolids && userGradientSolids.length) {
            result.push({
                name: _x(
                    'Custom',
                    'Indicates this gradient is created by the user.',
                    'atrc-prefix-atrc'
                ),
                gradients: userGradientSolids,
            });
        }
        return result;
    }, [
        userGradientPalette,
        themeGradientPalette,
        defaultGradientPalette,
        shouldDisplayDefaultGradients,
        useCSSVariables,
    ]);
}


const AtrcUseColors = () => {
    const allSolids = AtrcUseColorSolids();
    const allGradients = AtrcUseColorGradients();

    return {
        allSolids,
        allGradients,
    };
};

export default AtrcUseColors;
