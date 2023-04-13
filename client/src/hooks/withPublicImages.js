
import usePublicImages from '../hooks/usePublicImages';
import { createElement } from 'react';

export default function withPublicImages(folder) {
  return function Extend(WrappedComponent) {
    function WithPublicImages(props) {
      const images = usePublicImages(folder);
      const passDownProps = {
        ...props,
        images,
      };
      return createElement(WrappedComponent, passDownProps);
    }

    WithPublicImages.displayName = `withPublicImages(${getDisplayName(
      WrappedComponent,
    )})`;

    WithPublicImages.WrappedComponent = WrappedComponent;

    return WithPublicImages;
  };
}

function getDisplayName(Component) {
  return (
    Component.displayName ||
    Component.name ||
    (typeof Component === 'string' && Component.length > 0 ? Component : 'Unknown')
  );
}