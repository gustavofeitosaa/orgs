
import { StatusBar, SafeAreaView} from 'react-native';
//partindo do ponto que a gnt está usamos sempre o ./
import Cesta from './src/telas/Cesta';
import Frutas from './src/telas/Frutas';
//para startar a aplicação soltar um -> expo start -m tunnel
export default function App() {
  return (
    //importante usar o SafeAreaView para evitar que apenas no IOS a barra de ações seja evitada pelo que ta dentro
    //Ele criará uma margem por fora
    //Substitui a View
    <SafeAreaView>
      <StatusBar/>
      <Cesta/>
    </SafeAreaView>
  );
}
