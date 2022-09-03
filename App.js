
import { StatusBar, SafeAreaView, View} from 'react-native';
import {useFonts, Montserrat_400Regular, Montserrat_700Bold} from '@expo-google-fonts/montserrat';

import Cesta from './src/telas/Cesta';

//para startar a aplicação soltar um -> expo start -m tunnel
export default function App() {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if (!fonteCarregada) {
    return <View />
  }

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
