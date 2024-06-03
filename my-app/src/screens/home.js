
import { FlatList, TouchableOpacity } from "react-native";
import TextWhite from "../componentes/textWhite";
import Layout from "./layout";
import { useEffect, useState } from "react";
import apiGet from "../utility/apiGet";

export default Home = ({navigation}) => {
    const [imgDay, setImgDay] = useState({})//llave uno solo
    const [img7Day, setImg7Day] = useState ([])//corchetes muhos json


    useEffect(() => {

        const getImgToDay=async ()=> {//obtencion de imagenes
            try{
                const Data = await apiGet("");
                setImgDay(Data);
                console.log(Data);
            }
            catch(er){
                console.error("error en la funcion getImageToDay",er)
            }
        }; 
        getImageToDay();

        const getImgTo7Days=async () => {
            const date =new Date();
            console.log("fecha: ", date);
            //le damos formto con la libreria
            const dateFormat = format(date, "yyyy-MM-dd");
            //console.log("fecha con formato", dateFormat);

            const date7Last = sub(date, {days:7});
            const date7LastFormat = fromat(date7Last, "yyyy-MM-dd") 

            try{
                //obtine las imagenes de los ultimos dias
                const Data7 = await apiGet(`&start_date= ${date7LastFormat}&end_date=
                ${date_Format}`
            );
            setImg7Day(Data7);
       //     console.log(Data7);
            }
            catch(error){
                console.log("error al conectar", error)

            }


        };

    }, []);

    const handlePress = ({objetoJson}) =>{
        navigation.navigate('Detalles', {objetoJson})
    }



    //es un ejemplo
    return(<Layout>
        <Header texto= "Descubrir"/>  
        <Visor Data ={imgDay} onPress={()=> handlePress(imgDay) } />
        <TextWhite texto={"ultimos dias"}/>
        <FlatList data={img7Date} renderItem={({item}) => (<Cards title={item.title}
        date={item.date} url={item.url}onPress={()=> handlePress(item) }/>)}   
        keyExtractor={item => item.url}
        ></FlatList>
       
    </Layout>
    );


};