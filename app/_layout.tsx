import {
	QueryClient,
	QueryClientProvider
} from '@tanstack/react-query';
import { Stack } from 'expo-router';
import React from "react";
import { View } from "react-native";
import "../global.css";

const queryClient = new QueryClient()

const RootLayout = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<View className="h-full">
				{/* <Text className="text-4xl font-bold text-blue-500 text-center m-auto">
					RootLayout
				</Text> */}
				<Stack screenOptions={{ headerShown: false }} />
			</View>
		</QueryClientProvider>
	);
};

export default RootLayout;
