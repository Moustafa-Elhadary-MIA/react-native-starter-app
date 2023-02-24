import {StatusBar} from 'expo-status-bar';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';

import React from 'react';

import {PortalProvider} from '@gorhom/portal';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider as PaperProvider} from 'react-native-paper';
import {SnackbarProvider} from './src/contexts/SnackBarContext';

const queryClient = new QueryClient();

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <QueryClientProvider client={queryClient}>
        <GestureHandlerRootView style={styles.gestureHandler}>
          <PaperProvider>
            <SafeAreaProvider>
              <SnackbarProvider>
                <PortalProvider>
                  <>
                    <Navigation colorScheme={colorScheme} />
                    <StatusBar />
                  </>
                </PortalProvider>
              </SnackbarProvider>
            </SafeAreaProvider>
          </PaperProvider>
        </GestureHandlerRootView>
      </QueryClientProvider>
    );
  }
}

const styles = StyleSheet.create({
  gestureHandler: {
    flex: 1,
  },
});
