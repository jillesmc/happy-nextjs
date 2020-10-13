import { render, RenderResult } from '@testing-library/react';
import { ReactElement } from 'react';

const Providers = ({ children }) => {
  return children;
};

const customRender = (ui: ReactElement, options = {}): RenderResult => {
  return render(ui, { wrapper: Providers, ...options });
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
