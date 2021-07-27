import { createPortal } from 'react-dom';

import { PortalProps } from './Portal.interface';

function Portal({ children }: PortalProps) {
  return createPortal(
    children,
    document.getElementById('portal-root') as HTMLDivElement,
  );
}

export default Portal;
