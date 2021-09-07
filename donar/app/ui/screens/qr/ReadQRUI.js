import React, {useState} from 'react';
import {View, Text, Pressable, ImageBackground, StyleSheet} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import I18n from 'i18n-js';

export default function ReadQRUI({navigation}) {
  const onSuccess = e => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err),
    );
  };

  const [qr, setQr] = useState(false);

  return (
    <View>
      <Pressable onPress={() => setQr(!qr)}>
        {qr === false && (
          <>
            <Text>{I18n.t('QR_SCAN')}</Text>
            <ImageBackground
              style={style.image}
              source={{
                uri: 'https://www.ebooz.com/wp-content/uploads/codigos-qr1-624x416.jpg',
              }}
            />
          </>
        )}
      </Pressable>
      {qr === true && (
        <>
          <QRCodeScanner
            onRead={() => onSuccess()}
            flashMode={RNCamera.Constants.FlashMode.torch}
          />
          <Pressable onPress={() => navigation()}>
            <Text>{I18n.t('NEXT')}</Text>
          </Pressable>
        </>
      )}
    </View>
  );
}

const style = StyleSheet.create({
  image: {
    width: '70%',
    height: '70%',
  },
});
