  import { View, StyleSheet,useColorScheme,SafeAreaView } from 'react-native';
import { componentWithChildren } from 'types';
export default function ContentLayout({children}:componentWithChildren){
    const theme = useColorScheme();
  return<View style={[styles.container,styles[theme || 'light']]}>
    <SafeAreaView>
    {children}
    </SafeAreaView>
    </View>
  
} 

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#FDFDFD',
    paddingLeft: 20,
    paddingRight: 20,
  },
  light:{
    backgroundColor:'#FDFDFD',
  },
  dark:{
    backgroundColor:'#000',
  }
});
