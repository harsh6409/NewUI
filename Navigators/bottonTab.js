import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MarketScreen from '../Screens/Market';
import RecentScreen from '../Screens/Recent';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Market" component={MarketScreen} />
            <Tab.Screen name="Recents" component={RecentScreen} />
        </Tab.Navigator>
    );
}
