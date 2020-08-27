import React, { Suspense } from 'react';
import theme from 'helpers/theme';
import Loader from 'components/Loader'

/**
 * Component that wraps a React.Suspend around a given Component
 * @name Suspend
 * @component
 * @param {ReactElement} Component 
 */

const Suspend = Component => {
    return props => (
        <Suspense fallback={<Loader color={theme.secondary} />}>
            <Component {...props} />
        </Suspense>
    );
}

export default Suspend;