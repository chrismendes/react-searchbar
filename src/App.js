import { LayoutSiteHeader } from './layouts';
import Search from './components/Search';
import BaseStyles from './baseStyles';

function App() {
  return (
    <>
      <BaseStyles />
      <LayoutSiteHeader>
        <Search />
      </LayoutSiteHeader>
    </>
  );
}

export default App;