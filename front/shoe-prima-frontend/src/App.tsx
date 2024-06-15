import Router from './routes/Router';
import GlobalStyle from './styles/GlobalStyles';

const App: () => JSX.Element = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
};

export default App;
