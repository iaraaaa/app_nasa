import{NavigationConteiner} from "@react-navigation/native";
import{createNativeStackNavigator} from "@react-navigation/native-stack"
import Home from "../screens/home"
import Details from "../screens/details";


const Stack = createNativeStackNavigator();

const options = {title: "Inicio",
headerStyle:{
    backgroundColor:primaryColor,
    primaryColor,},
    headerBackTitleStyle:{
        color: "white",
        aligment: "center"},
    headerTitleStyle:{
        color: "white",
        aligment: "center",},
    headerBackTitleStyle : "center",
    }

export default Router = () =>{
    return(
     <NavigationConteiner>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Detalles" component={Details}/>
        </Stack.Navigator>
    </NavigationConteiner>
    )
};