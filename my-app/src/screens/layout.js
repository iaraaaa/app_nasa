import { Platform,View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"
import {primaryColor} from "../cons/colors"

export default Layout = ({children}) =>{
    return(
        <SafeAreaView style={styles.conteiner}>
        <View style={{paddingTop: Platform.OS === "android" && 10}}>{children}</View>
            </SafeAreaView>
    )
};


const styles = StyleSheet.create({
    conteiner:{
        flex: 1,
        backgroundColor :primaryColor,
        paddingHorizontal :15,
    },

});