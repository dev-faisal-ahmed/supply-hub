import { createPortal } from 'react-dom';
import { WrapperType } from '../utils/types';

export function Portal({ children }: WrapperType) {
  return createPortal(
    children,
    document.getElementById('portal') as HTMLElement,
  );
}
