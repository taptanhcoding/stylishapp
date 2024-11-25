import { View } from "react-native";

import { ActivityIndicator } from "react-native";

function Loading() {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    )
  }

export default Loading; 