import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Maticon from 'react-native-vector-icons/MaterialCommunityIcons';
import { HomeScreen } from '../screens/HomeScreen';
import EntrepreneursScreen from '../screens/Entrepreneurs';
import ActivitiesScreen from '../screens/Activities';
import CalendarScreen from '../screens/Calendar';
import { TicketsScreen } from '../screens/Tickets';
import { View, TouchableOpacity } from 'react-native';
import { navigationStyle } from '../theme/styles/navigation';
import { colors } from '../theme/colors';

const Tab = createBottomTabNavigator();

export default function TabsNav() {
	return (
		<Tab.Navigator
			tabBarOptions={{
				activeTintColor: colors.primary,
				inactiveTintColor: colors.grey1,
				showLabel: false,
				style : navigationStyle.navMain 
			}}
		>
			<Tab.Screen name="Home" 
				component={ HomeScreen } 
				options={{
					tabBarIcon: ({ color }) => {
						return(
							<TouchableOpacity>
								<View>
									<Maticon name="home" size={28} color={color} />
								</View>
							</TouchableOpacity>
						)
					}
				}}
			/>
			<Tab.Screen name="Activities" 
				component={ ActivitiesScreen } 
				options={{
					tabBarIcon: ({ color }) => {
						return(
							<TouchableOpacity>
								<View>
									<Maticon name="bulletin-board" size={28} color={color} />
								</View>
							</TouchableOpacity>
						)
					}
				}}
			/>
			<Tab.Screen name="Tickets" 
				component={ TicketsScreen } 
				options={{
					tabBarIcon: () => {
						return(
							<TouchableOpacity>
								<View style={ navigationStyle.navButtonCenter }>
									<Maticon name="sticker-plus" size={40} color='#FFF' />
								</View>
							</TouchableOpacity>
						)
					}
				}}
			/>
			<Tab.Screen name="Entrepreneurs" 
				component={ EntrepreneursScreen } 
				options={{
					tabBarIcon: ({ color }) => {
						return(
							<TouchableOpacity>
								<View >
									<Maticon name="account-group" size={28} color={color} />
								</View>
							</TouchableOpacity>
						)
					}
				}}
			/>
			<Tab.Screen name="Calendar" 
				component={ CalendarScreen } 
				options={{
					tabBarIcon: ({ color }) => {
						return(
							<TouchableOpacity>
								<View>
									<Maticon name="calendar-month-outline" size={28} color={color} />
								</View>
							</TouchableOpacity>
						)
					}
				}}
			/>
		</Tab.Navigator>
	)
}