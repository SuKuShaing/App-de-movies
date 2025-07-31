import React from "react";
import { Text, View } from "react-native";

import '../global.css';

const RootLayout = () => {
	return (
		<View className="h-full">
			<Text className="text-4xl font-bold text-blue-500 text-center m-auto">RootLayout</Text>
		</View>
	);
};

export default RootLayout;
