/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { ScrollView, StatusBar, View, Pressable, Text} from 'react-native'
 
 
 
 
 const App = () => {
 
 
   return (
     <ScrollView>
       <StatusBar hidden={true} />      
         <View style={{width: '50%', alignItems: 'space-between'}}>
           <Pressable onPressIn={() => test()}>
             <Text>TEST</Text>
           </Pressable>
         </View>
         
     </ScrollView>
   );
 };
 
 export default App;