import { useContext } from 'react';
import { has } from 'lodash';
import { AppContext } from '.';

/**
 * @see https://reactjs.org/docs/higher-order-components.html
 */
export default function withContext(WrappedComponent) {
  const WithContext = () => {
    const context = useContext(AppContext);
    const name = WrappedComponent.name.toLowerCase();
    if (!has(context, name)) {
      return <WrappedComponent />;
    }

    return <WrappedComponent {...context[name]} />;
  };

  return WithContext;
}
