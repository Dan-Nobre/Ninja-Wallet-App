import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../pages/BemVindo/WelcomeScreen";
import Login from "../pages/Login/Login";
import AddDataScreen from "../pages/AddDados/AddData";
import AddDataScreenGastos from "../pages/Compras/AddDataScreenGastos";
import Resumo from "../pages/Resumo/Resumo";
import Home from "../pages/Home/Home";


const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={WelcomeScreen}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="Login"
                component={Login}
                options={{headerShown: false}}
            />
            
            <Stack.Screen
                name="Home"
                component={Home}
                options={{headerShown: false}}
            />

            <Stack.Screen 
                name="Adicionar Saldo" 
                component={AddDataScreen} 
                options={{
                    headerStyle: { backgroundColor: '#4850DB'}
                }}/>
            <Stack.Screen 
                name="Registrar Compras" 
                component={AddDataScreenGastos} 
                options={{
                    headerStyle:{ backgroundColor: '#4850DB'}
                }}/>
            <Stack.Screen 
                name="Resumo" 
                component={Resumo} 
                options={{
                    headerStyle:{ backgroundColor: '#4850DB'}
                }}/>
        </Stack.Navigator>
    )
}