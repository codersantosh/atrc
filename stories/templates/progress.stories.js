/* Inbuilt */
import { AtrcProgressTemplate1 } from '../../packages';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
    title: 'Templates/Progress',
    component: AtrcProgressTemplate1,
};

/* Template 1 */
const total = 8850;
const processed = 3750;
const percentage = total > 0 ? (processed / total) * 100 : 0;

export const Template1 = () => {
    return (
        <AtrcProgressTemplate1 total={total} processed={processed} percentage={percentage} />
    );
};

export const Template1StripedAnimation = () => {
    return (
        <AtrcProgressTemplate1 total={total} processed={processed} percentage={percentage} progressProps={{ hasStriped: true, hasAnimation: true }} />
    );
};