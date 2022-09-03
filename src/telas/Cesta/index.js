import { StyleSheet, Image, Dimensions, View } from "react-native";

import Topo from "./componentes/Topo";
import Detalhe from "./componentes/Detalhe";

export default function Cesta() {
    return <View> 
        <Topo />
        
        <View style={estilos.cesta}>
            <Detalhe />
        </View>
    </View>
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16, 
    },
}); 