import {ThemeProvider} from '@material-ui/styles';
import theme from './Themes/Default';
import TodoInput from './Components/TodoInput';

function App() {
  return (
   <ThemeProvider theme={theme}>
      <TodoInput />
   </ThemeProvider>
  );
}

export default App;
