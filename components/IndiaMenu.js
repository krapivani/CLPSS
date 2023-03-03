import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
 Menu,
 MenuProvider,
 MenuOptions,
 MenuOption,
 MenuTrigger,
} from "react-native-popup-menu";

const Divider = () => <View style={styles.divider} />;

const IndiaMenu = () => {
 return (
   <MenuProvider style={styles.container}>
     <Menu>
       <MenuTrigger
         text="India"
         customStyles={{
           triggerWrapper: {
             top: -20,
           },
         }}
       />
       <MenuOptions>
         <MenuOption onSelect={() => alert(`By State`)} text="By Gaam" />
         <Divider/>
         <MenuOption onSelect={() => alert(`By Distance`)} text="By Distance" />
       </MenuOptions>
     </Menu>
   </MenuProvider>
 );
};

export default IndiaMenu;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  divider: {
   height: 2,
   backgroundColor: "#7F8487",
 },
});
