import * as React from 'react';

import { SafeAreaView } from 'react-native';
import QrcodeMask from '@artefan/react-native-qrcode-mask';

export default function App() {
  return (
    <SafeAreaView
      style={{
        height: '100%',
        backgroundColor: 'white',
      }}
    >
      <QrcodeMask />
    </SafeAreaView>
  );
}
