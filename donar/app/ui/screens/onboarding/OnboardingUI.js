import React from 'react';
import {Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import NavigatorConstant from '../../../navigation/NavigatorConstant';
import I18n from '../../../assets/localization/i18n';

export default function OnboardingUI({navigation}) {
  return (
    <Onboarding
      nextLabel={I18n.t('NEXT')}
      skipLabel={I18n.t('SKIP')}
      onSkip={() => navigation()}
      onDone={() => navigation()}
      pages={[
        {
          backgroundColor: '#fff',
          image: (
            <Image
              style={{width: 200, height: 200}}
              source={{
                uri: 'https://i.blogs.es/4f0662/consejos-foto-movil-01/1366_2000.jpg',
              }}
            />
          ),
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fe6e58',
          image: (
            <Image
              style={{width: 200, height: 200}}
              source={{
                uri: 'https://i.blogs.es/4f0662/consejos-foto-movil-01/1366_2000.jpg',
              }}
            />
          ),
          title: 'The Title',
          subtitle: 'This is the subtitle that sumplements the title.',
        },
        {
          backgroundColor: '#999',
          image: (
            <Image
              style={{width: 200, height: 200}}
              source={{
                uri: 'https://i.blogs.es/4f0662/consejos-foto-movil-01/1366_2000.jpg',
              }}
            />
          ),
          title: 'Triangle',
          subtitle: "Beautiful, isn't it?",
        },
      ]}
    />
  );
}
