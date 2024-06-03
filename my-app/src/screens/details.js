import { View, Text, ScrollView } from "react-native";
import Layout from "./layout";
import TextWhite from "../componentes/textWhite";
import { useRoute } from "@react-navigation/native";


export default Details = ({texto}) =>{
    const{
        params: {data},
    }= useRoute();

    return(
    <Layout>
        <TextWhite texto={objetoJson.title} size={10}/>

        <Image style={{width:300, height:500}} source={{uri: objetoJson.url}}/>

        <TextWhite texto={objetoJson.explanation} size={10}/>


        <ScrollView>
            <TextWhite texto={objetoJson.explanation}/>
        </ScrollView>
        
    </Layout>

    
    );
} ;