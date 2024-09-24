import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Animated, {FadeInUp, FadeInDown} from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';



const SignUpScreen = () => {

  const navigation = useNavigation();
  return (
    <View className="bg-white h-full w-full">
      <Image
        className="absolute h-full w-full "
        source={require('../../assets/images/background.png')}
      />
      <View className="flex-row justify-around w-full absolute">
        <Animated.Image
          entering={FadeInUp.duration(1000).springify()}
          className="h-[225] w-[90]"
          source={require('../../assets/images/light.png')}
        />
        <Animated.Image
          entering={FadeInUp.duration(1000).springify()}
          className="h-[160] w-[65]"
          source={require('../../assets/images/light.png')}
        />
      </View>

      <View className="h-full w-full flex justify-around pt-40 pb-10 ">
        <View className="flex items-center ">
          <Animated.Text
            entering={FadeInUp.duration(1000).springify()}
            className="text-white font-bold tracking-wider text-5xl">
            SignUp
          </Animated.Text>
        </View>

        <View className="flex items-center mx-4 space-y-4 ">
          <Animated.View entering={FadeInDown.duration(1000).springify()} className="bg-black/5 p-5 rounded-2xl w-full  ">
            <TextInput placeholder="Username" placeholderTextColor={'gray'} />
          </Animated.View>

          <Animated.View entering={FadeInDown.duration(1000).delay(200).springify()} className="bg-black/5 p-5 rounded-2xl w-full  ">
            <TextInput placeholder="E-mail" placeholderTextColor={'gray'} />
          </Animated.View>
          <Animated.View entering={FadeInDown.duration(1000).delay(400).springify()} className="bg-black/5 p-5 rounded-2xl w-full  ">
            <TextInput
              placeholder="password"
              placeholderTextColor={'gray'}
              secureTextEntry
            />
          </Animated.View>
          <Animated.View entering={FadeInUp.duration(1000).delay(600).springify()} className="w-full ">
            <TouchableOpacity className="w-full bg-sky-400 p-3 rounded-2xl mb-3">
              <Text className="text-2xl font-bold text-center text-white">
                SignUp
              </Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View entering={FadeInUp.duration(1000).delay(800).springify()} className="flex-row justify-center">
            <Text>Already have an account?</Text>
            <TouchableOpacity onPress={()=> navigation.push("Login")}>
              <Text className="text-sky-600">Login</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;
