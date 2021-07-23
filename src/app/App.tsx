import smoothscroll from 'smoothscroll-polyfill';

import { AppProviders } from 'providers/AppProviders';
import { AppRoutes } from 'routing/AppRoutes';

smoothscroll.polyfill();

function App() {
  return (
    <div className="text-gray-600 App font-body">
      <AppProviders>
        <AppRoutes />
      </AppProviders>
    </div>
  );
}

export default App;
