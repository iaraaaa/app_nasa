import { View } from "react-native"
import TextWhite from "./textWhite";

export default Header = ({texto}) =>{
    return <View>
        <TextWhite texto={texto} size={20}/>  
        <image  style={{width: 70, height:70}} 
        source= {require ("../../assets/logo_nasa.png")}/>
    </View>;

};