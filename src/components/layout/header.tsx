import MenuIcon from '../../components/icons/MenuIcon';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  Platform,
} from 'react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import InputComponent from '../../components/InputComponent';
import {SearchIcon} from '../../components/icons/SearchIcon';
import {MicIcon} from '../../components/icons/MicIcon';
import Voice from '@react-native-voice/voice';
import  debounce from 'lodash.debounce';
import { PermissionsAndroid } from 'react-native';
import UpDownArrowIcon from '../../components/icons/UpDownArrowIcon';


export const HeaderFilter = ({title}:{title:string}) => {
  const [isListening, setIsListening] = useState(false);
  const [text,setText] = useState<string>('')
  const inputRef = useRef<any>(null)
  const setValueText = useCallback(debounce(async(value) => {
    console.log("value listent",value);
    setText(value)
    await stopListening()
  },500),[inputRef])

  const startListening = async () => {
    try {
      inputRef.current.blur()
      setText("Đang lắng nghe...")
      setIsListening(true);
      await Voice.start('vi-VN'); 
    } catch (e:any) {
      console.error('error start',e.toString());
    }
  };

  const stopListening = async () => {
    try {
      console.log("Stop Listening");
      await Voice.stop();
    } catch (e:any) {
      console.error("Lỗi khi dừng nghe",Voice.stop,e.toString());
      setText('')
    }
    finally {
      setIsListening(false);
    }
  };

  const onSpeechResults = (e:any) => {
    console.log("results:::",e,e.value[0]);
    
    setValueText(e.value[0])
    
  };

  const onSpeechError = (e:any) => {
    console.error('Speech error:', e);
  };

  const changeText = useCallback((value:string) => {
    // inputRef.current.setNativeProps({text: value})
    setText(value)
    
  },[inputRef])

  const submitValue =(e:any)=>{
    console.log("Submit",e.nativeEvent.text);
    
  }

  const requestRecordAudioPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        {
          title: 'Microphone Permission',
          message: 'We need access to your microphone to process speech recognition.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Microphone permission granted');
        Voice.start('vi-VN'); // Start voice recognition after permission is granted
      } else {
        console.log('Microphone permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  useEffect(() => {
    Voice.onSpeechStart = (e) => console.log('Speech started', e);
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechError = onSpeechError;
    // requestRecordAudioPermission()
    if(inputRef.current)
    inputRef.current.setNativeProps({placeholder: "Search any Product.."})
    return () => {
      console.log("xoa Voice");
      
      Voice.destroy().then(Voice.removeAllListeners);
    };
  },[])
  return (
    <View style={styles.container}>
      <View style={styles.header2}>
        <InputComponent
          ref={inputRef}
          prefix={<SearchIcon color="#BBBBBB" />}
          suffix={Platform.OS != "android" && <MicIcon />}
          onPressSuffix={isListening ? stopListening : startListening}
          styleWrappe={{padding: 8, paddingLeft: 46, paddingRight: 50,backgroundColor:"#FFFFFF"}}
          styleInput={{fontSize: 20}}
          onChangeText={changeText}
          value={text}
          onSubmitEditing={submitValue}
          placeholder={isListening? "Đang lắng nghe ...":"Seach any Product..."}
          onC
        />
      </View>
      {/* row 3 */}
      <View style={styles.header3}>
        <Text style={styles.header3Title}>{title}</Text>
        <TouchableWithoutFeedback>
          <View style={styles.button}>
            <Text style={{marginEnd:4,fontSize:16}}> Sort</Text>
            <UpDownArrowIcon/>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export const HeaderTop = () => {
  return (
    <View style={styles.header1}>
      <TouchableWithoutFeedback>
        <View style={styles.menuIcon}>
          <MenuIcon color="#323232" size={24} />
        </View>
      </TouchableWithoutFeedback>
      <Image source={require('./logoH.png')} />
      <TouchableWithoutFeedback>
        <View style={styles.avatar}></View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  header1: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuIcon: {
    padding: 8,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 20,
    padding: 8,
    backgroundColor: 'red',
  },
  header2: {
    // height: 40,
    margin: 16,
    marginEnd: 0,
    marginLeft: 0,
  },
  header3: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  header3Title: {
    fontSize:24,
    fontWeight: "bold",
  },
  button: {
    backgroundColor:"white",
    display:"flex",
    flexDirection:"row",
    paddingHorizontal:8,
    paddingVertical:4,
    borderRadius:6
  }
});
