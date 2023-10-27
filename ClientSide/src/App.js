import './App.css';
import AppRouter from './AppRouter';
import CarContext from './Context/CarContext';
function App() {
  return (
   <>
   <CarContext>
      <AppRouter/>
   </CarContext>

   </>
  );
}

export default App;
