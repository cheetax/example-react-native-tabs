//import Tabs from './Tabs/Tabs';
import Tabs from '@cheetax/react-native-tabs';
//import Skia from '@shopify/react-native-skia';
import { Canvas, Path, PathDef, PathProps, SkPath, Transforms3d, Skia, usePathInterpolation, AnimatedProp, rotate, useCanvasRef, useCanvasSize, Group, rect, FitBox } from '@shopify/react-native-skia';
//import { Skia } from '@shopify/react-native-skia/lib/typescript/src/skia/types';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { LayoutChangeEvent, StyleSheet, Text, View } from 'react-native';
import Animated, { createAnimatedComponent, useAnimatedReaction, useAnimatedStyle, useSharedValue, withRepeat, withTiming, interpolate, SharedValue, Extrapolation, Easing, withSequence, WithTimingConfig } from 'react-native-reanimated';
import LoadingIndicator from './indicators/LoadingIndicator';



export default function App() {

  const onLayout = (event: LayoutChangeEvent) => {
    //const { width, height } = ref.current;
    //const x = useCanvasSize()
    // console.log(x);
  }
  return (
    <View style={[styles.container, { backgroundColor: 'grey' }]} onLayout={onLayout} >
      <LoadingIndicator
        variant='small'
        active={true}
        visibleContainer
        size={{
          sizeContainer: 240,
          sizeElement: 200
        }}
        //colors={{container: 'red', element: 'green'}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: '100%',
    //backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
