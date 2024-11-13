import { Stack } from 'expo-router';
import { NativeWindStyleSheet } from 'nativewind';
import { StatusBar } from 'react-native';

NativeWindStyleSheet.setOutput({
  default: 'native',
});

export default function Layout() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </>
  );
}
