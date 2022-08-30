import React from "react";
import { StyleSheet, Image, Dimensions, Text, View } from "react-native";

import topo from '../../assets/topo.png';

const width = Dimensions.get('screen').width;

//como ele é o export padrão só pode ter um. Por isso a gente poderá importar sem usar as chaves! 
//Como a gnt quer que esse arquivo seja o componente da Cesta a gnt geralmente exporta como default, para que se tenha só um componente e não tenha erro depois para importar
//Criamos um componente usando uma função! e retornamos um <Text> com o nome Cesta 
//Não estará acontecendo nada pois a gnt ainda não ta importando ele, portanto n ta utilizando ele la no App.js ->para utilizar deve importa-lo para o arquivo App.js 
export default function Cesta() {
    //ja que não precisamos estilzar, utilizaremos um fragmento em vez de uma View
    return <View> 
        <Image source={topo} style={estilos.topo} />
        <Text style={estilos.titulo}>Detalhe da cesta</Text>
        
        <View style={estilos.cesta}>
            <Text style={estilos.nome}>Cesta de Verduras</Text>
            <Text>Jenny Jack Farm</Text>
            <Text>Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha</Text>
            <Text>R$ 40,00</Text>
        </View>
    </View>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width,
    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16, 
    },
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 46,

    }
});