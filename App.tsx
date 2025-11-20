//import Tabs from './Tabs/Tabs';
import Tabs from '@cheetax/react-native-tabs';
import { StatusBar } from 'expo-status-bar';
import { LayoutChangeEvent, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {

  const onLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent?.layout || { width: 0, height: 0 }
    console.log(`Width: ${width}, Height: ${height}`);
  }
  return (
    <SafeAreaView style={styles.container} >
        <StatusBar style="auto" />
        <Text>Example react-native-tabs</Text>

        <Tabs content={['Test1', 'Test2', 'Test3r', 'Test1', 'Test1', 'Test1']}
          duration={200}
          mode='primary'
        />
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: '100%',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
