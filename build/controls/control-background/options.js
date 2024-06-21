import React from 'react';

/*WordPress*/
import { __ } from '@wordpress/i18n';

/* Options*/
export var PositionOptions = function PositionOptions() {
  return [{
    label: __('Default', 'atrc-prefix-atrc'),
    value: ''
  }, {
    label: __('Left top', 'atrc-prefix-atrc'),
    value: 'left top'
  }, {
    label: __('Left center', 'atrc-prefix-atrc'),
    value: 'left center'
  }, {
    label: __('Left bottom', 'atrc-prefix-atrc'),
    value: 'left bottom'
  }, {
    label: __('Right top', 'atrc-prefix-atrc'),
    value: 'right top'
  }, {
    label: __('Right center', 'atrc-prefix-atrc'),
    value: 'right center'
  }, {
    label: __('Right bottom', 'atrc-prefix-atrc'),
    value: 'right bottom'
  }, {
    label: __('Center top', 'atrc-prefix-atrc'),
    value: 'Center top'
  }, {
    label: __('Center center', 'atrc-prefix-atrc'),
    value: 'center center'
  }, {
    label: __('Center bottom', 'atrc-prefix-atrc'),
    value: 'center bottom'
  }, {
    label: __('Custom', 'atrc-prefix-atrc'),
    value: 'custom'
  }];
};
export var RepeatOptions = function RepeatOptions() {
  return [{
    label: __('Default', 'atrc-prefix-atrc'),
    value: ''
  }, {
    label: __('Repeat', 'atrc-prefix-atrc'),
    value: 'repeat'
  }, {
    label: __('Repeat-x', 'atrc-prefix-atrc'),
    value: 'repeat-x'
  }, {
    label: __('Repeat-y', 'atrc-prefix-atrc'),
    value: 'repeat-y'
  }, {
    label: __('Space', 'atrc-prefix-atrc'),
    value: 'space'
  }, {
    label: __('Round', 'atrc-prefix-atrc'),
    value: 'round'
  }, {
    label: __('No-repeat', 'atrc-prefix-atrc'),
    value: 'no-repeat'
  }];
};
export var BgSzOptions = function BgSzOptions() {
  return [{
    label: __('Default', 'atrc-prefix-atrc'),
    value: ''
  }, {
    label: __('Auto', 'atrc-prefix-atrc'),
    value: 'auto'
  }, {
    label: __('Cover', 'atrc-prefix-atrc'),
    value: 'cover'
  }, {
    label: __('Contain', 'atrc-prefix-atrc'),
    value: 'contain'
  }, {
    label: __('Custom', 'atrc-prefix-atrc'),
    value: 'custom'
  }];
};
export var BgAtchOptions = function BgAtchOptions() {
  return [{
    label: __('Default', 'atrc-prefix-atrc'),
    value: ''
  }, {
    label: __('Scroll', 'atrc-prefix-atrc'),
    value: 'scroll'
  }, {
    label: __('Fixed', 'atrc-prefix-atrc'),
    value: 'fixed'
  }, {
    label: __('Local', 'atrc-prefix-atrc'),
    value: 'local'
  }];
};
export var BgBlendModeOptions = function BgBlendModeOptions() {
  return [{
    label: __('Default', 'atrc-prefix-atrc'),
    value: ''
  }, {
    label: __('Normal', 'atrc-prefix-atrc'),
    value: 'normal'
  }, {
    label: __('Multiply', 'atrc-prefix-atrc'),
    value: 'multiply'
  }, {
    label: __('Screen', 'atrc-prefix-atrc'),
    value: 'screen'
  }, {
    label: __('Overlay', 'atrc-prefix-atrc'),
    value: 'overlay'
  }, {
    label: __('Darken', 'atrc-prefix-atrc'),
    value: 'darken'
  }, {
    label: __('Lighten', 'atrc-prefix-atrc'),
    value: 'lighten'
  }, {
    label: __('Color dodge', 'atrc-prefix-atrc'),
    value: 'color-dodge'
  }, {
    label: __('Saturation', 'atrc-prefix-atrc'),
    value: 'saturation'
  }, {
    label: __('Color', 'atrc-prefix-atrc'),
    value: 'color'
  }, {
    label: __('Luminosity', 'atrc-prefix-atrc'),
    value: 'luminosity'
  }];
};
//# sourceMappingURL=options.js.map