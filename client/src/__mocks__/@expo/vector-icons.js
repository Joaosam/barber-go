import React from "react";
import { Text } from "react-native";

// Create a mock component that renders a simple Text component
const IconMock = ({ name, size, color, style }) => {
  return <Text style={style}>{name}</Text>;
};

// Mock all the icon sets from @expo/vector-icons
export const Feather = IconMock;
export const AntDesign = IconMock;
export const Entypo = IconMock;
export const EvilIcons = IconMock;
export const FontAwesome = IconMock;
export const FontAwesome5 = IconMock;
export const Fontisto = IconMock;
export const Foundation = IconMock;
export const Ionicons = IconMock;
export const MaterialCommunityIcons = IconMock;
export const MaterialIcons = IconMock;
export const Octicons = IconMock;
export const SimpleLineIcons = IconMock;
export const Zocial = IconMock;
