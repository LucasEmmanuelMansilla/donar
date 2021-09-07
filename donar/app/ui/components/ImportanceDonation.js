import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

export default function ImportanceDonation() {
  return (
    <View style={style.container}>
      <Text>¿Por qué es tan importante ser donante de sangre?</Text>
      <ScrollView>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          vitae facilisis justo, at consequat tellus. Praesent rutrum mattis
          libero, nec dictum nibh pellentesque quis. Morbi non consequat velit.
          Aliquam blandit erat dolor, sit amet lobortis erat interdum eget. Orci
          varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Donec in quam eu purus cursus mollis in non nisl.
          Suspendisse ut nulla sed ligula lobortis consequat quis vel nisi.
          Pellentesque eget lectus aliquet, rutrum erat vel, malesuada eros. Ut
          eu scelerisque diam, sit amet varius metus. Sed sit amet nulla eget
          nisl aliquam tempus. Integer a quam sit amet magna lacinia pharetra a
          vel lorem. Suspendisse vel leo nunc. Nam tempus, enim consectetur
          pretium lacinia, neque mi sagittis nunc, ut porta felis arcu a turpis.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium
          augue lacus, id interdum est posuere eu. Quisque ullamcorper, diam ut
          ornare fringilla, quam risus consectetur lacus, ac dapibus velit
          lectus quis elit. Nunc malesuada quam at iaculis aliquam. Suspendisse
          viverra posuere facilisis. Donec fermentum condimentum nunc id
          vestibulum. Nunc viverra volutpat viverra. Nunc lobortis id nunc quis
          scelerisque. Sed accumsan lacus eu dui finibus elementum quis
          tincidunt urna. Vestibulum ut dignissim nunc. Vestibulum id fringilla
          urna, fringilla fringilla dolor. Ut condimentum egestas sem in
          dignissim. Vivamus at tincidunt quam, eget sodales tellus. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Ut congue, tortor in blandit vulputate, nunc nibh
          molestie nulla, ut pulvinar nisl turpis vitae quam. Ut tempor varius
          mauris tempor euismod. Sed fringilla consectetur velit. Quisque vel
          nunc ut purus gravida congue nec quis nunc. Nulla nunc magna, tempor
          ut sagittis vitae, auctor vitae massa. Curabitur sit amet lectus et
          justo sodales fringilla.
        </Text>
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
