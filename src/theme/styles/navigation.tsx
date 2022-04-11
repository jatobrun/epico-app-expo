import { StyleSheet } from "react-native";
import { colors } from "../colors";

export const navigationStyle = StyleSheet.create({
    navMain: {
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 30,
        marginHorizontal: 24,
        height: 60,
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 16
    },
    navButtonCenter :{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.primary,
        borderRadius: 32,
        padding: 8,
        top: -16,
        
    }
})