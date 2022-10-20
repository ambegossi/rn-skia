/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import { Canvas, Circle, Path } from '@shopify/react-native-skia';
import type { ReactNode } from 'react';
import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

interface IconProps {
  path: string;
  color: string;
}

const Icon = ({ path, color }: IconProps) => (
  <Canvas style={{ width: 48, height: 48 }}>
    <Circle cx={24} cy={24} r={24} color={color} />
    <Path fillType="evenOdd" path={path} color="white" />
  </Canvas>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
  },
  text: {
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Helvetica',
    fontSize: 16,
    color: 'white',
  },
  subtitle: {
    fontFamily: 'Helvetica',
    fontSize: 14,
    color: '#8E8E93',
  },
});

interface LinkProps {
  title: string;
  subtitle: string;
  children?: ReactNode | ReactNode[];
}

const Link = ({ title, subtitle, children }: LinkProps) => (
  <View style={styles.container}>
    <View>{children}</View>
    <View style={styles.text}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  </View>
);

function List() {
  return (
    <ScrollView
      style={{
        backgroundColor: '#272636',
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        overflow: 'hidden',
      }}
      contentContainerStyle={{ paddingHorizontal: 16 }}
    >
      <Link title="Website" subtitle="ethereum.org">
        <Icon
          color="#F7931A"
          path="M12.0552 22.0282C11.95 22.6698 11.8952 23.3285 11.8952 23.9999C11.8952 30.6779 17.3089 36.0915 23.9869 36.0915C26.3518 36.0915 28.5582 35.4126 30.4217 34.239L30.7988 34.3998L31.3877 34.639C31.4848 34.6774 31.5814 34.7151 31.6775 34.7521L32.2475 34.965L32.8041 35.16L33.3468 35.3369C36.9171 36.4543 39.523 36.338 40.4197 34.5807C41.2335 32.9675 40.2816 30.7825 37.9995 28.1614L37.5831 27.6944C37.4397 27.5372 37.2919 27.3786 37.1396 27.2184L36.6695 26.7338L36.1734 26.2406C36.0886 26.1577 36.0027 26.0744 35.9158 25.9908L35.9155 25.9905C36.0228 25.3429 36.0786 24.6779 36.0786 23.9999C36.0786 17.3218 30.6649 11.9082 23.9869 11.9082C21.6099 11.9082 19.393 12.5941 17.5235 13.7788L16.9101 13.5287L16.2972 13.2905L15.699 13.0703L15.1161 12.8684C14.9243 12.8043 14.7353 12.7432 14.5489 12.6854L13.9982 12.5217L13.4645 12.3779C10.4895 11.6195 8.36122 11.8376 7.55547 13.4178C6.63779 15.2174 8.18558 18.0844 11.3302 21.3064L11.8017 21.7804C11.8852 21.8628 11.9697 21.9454 12.0552 22.0282ZM14.4978 24.2237C14.6168 29.3624 18.8196 33.4915 23.9869 33.4915C25.2125 33.4915 26.3838 33.2592 27.4593 32.8363L27.361 32.7862L26.7043 32.4412C26.5942 32.3824 26.4837 32.323 26.3729 32.2629L25.7039 31.8952L25.0275 31.5128C24.9142 31.4479 24.8006 31.3824 24.6867 31.3162L24.0001 30.9124C23.8852 30.8439 23.77 30.7748 23.6545 30.7052L22.959 30.2806C22.8426 30.2087 22.7261 30.1362 22.6093 30.0632L21.9061 29.6185C21.7885 29.5433 21.6708 29.4675 21.5528 29.3913L20.8264 28.9159L20.0923 28.4242L19.3723 27.9303L18.6668 27.4349L17.9766 26.9383L17.3023 26.4411L16.6444 25.9437C16.5361 25.8608 16.4286 25.7779 16.3218 25.6951L15.6897 25.1984L15.0755 24.7029L14.4978 24.2237ZM30.1333 31.2329C27.7937 30.1323 25.2176 28.6828 22.6219 26.985C19.7284 25.0918 17.0809 23.0668 14.9355 21.134C16.1507 17.2926 19.7436 14.5082 23.9869 14.5082C29.229 14.5082 33.4786 18.7578 33.4786 23.9999C33.4786 24.6922 33.4044 25.3672 33.2637 26.0174C33.2358 26.0998 33.2164 26.1844 33.2054 26.2698C32.7229 28.2363 31.6275 29.962 30.1333 31.2329ZM32.7332 32.3492C33.077 32.4812 33.4124 32.603 33.7385 32.7142C35.2031 33.2137 36.4171 33.4758 37.2754 33.491L37.5441 33.4891C37.5839 33.4877 37.6213 33.4858 37.6563 33.4835L37.839 33.4663L37.97 33.4449L38.0539 33.4241L38.101 33.4044C38.194 33.2201 38.0894 32.8352 37.7969 32.2977L37.6351 32.0164C37.5463 31.8697 37.446 31.7139 37.3341 31.5498L37.0951 31.2108C37.0527 31.1526 37.0091 31.0934 36.9642 31.0335L36.6796 30.6639L36.3651 30.2755L36.0209 29.8697L35.6472 29.4479L35.2443 29.0113C35.1885 28.9519 35.1318 28.8922 35.0744 28.8321C34.5029 30.1416 33.7062 31.3303 32.7332 32.3492ZM12.8987 19.1692C12.8205 19.0876 12.7434 19.0064 12.6675 18.9255C12.5239 18.7725 12.3859 18.6218 12.2535 18.4738L11.8728 18.038C11.8121 17.9668 11.7528 17.8962 11.6949 17.8265L11.3639 17.4175C11.2591 17.2843 11.1597 17.1546 11.0659 17.0284L10.8007 16.6609C10.5934 16.3641 10.4202 16.0915 10.2807 15.8475L10.1295 15.5686C9.90452 15.1276 9.81401 14.8077 9.85536 14.6435L9.85921 14.6349C9.86062 14.6419 9.86848 14.6442 9.88545 14.6429L10.0321 14.6168C10.3843 14.5499 10.919 14.5618 11.5941 14.6656C12.6001 14.8203 13.8426 15.1654 15.2212 15.6709C14.2567 16.6857 13.4665 17.8678 12.8987 19.1692Z"
        />
      </Link>
      <Link title="Explorer" subtitle="blockchain.info">
        <Icon
          color="#3D88F4"
          path="M23.9083 9.59473C25.155 9.60794 26.0729 9.99977 26.8225 10.7453C27.9951 11.9118 29.1628 13.0832 30.3306 14.2546L30.3309 14.2548C31.359 15.2861 32.3871 16.3174 33.4185 17.3453C33.6453 17.5715 33.6444 17.6626 33.345 17.8099C30.3249 19.295 27.3099 20.7907 24.2982 22.2928C24.0929 22.3952 23.9412 22.3705 23.7506 22.275C20.7824 20.7866 17.813 19.3009 14.8379 17.8268C14.5371 17.6778 14.4879 17.5862 14.7448 17.3311C15.9908 16.0936 17.2325 14.8517 18.4743 13.6098L18.4745 13.6096C19.4533 12.6306 20.4322 11.6515 21.4133 10.6747C22.1483 9.94274 23.0662 9.63836 23.9083 9.59473ZM25.8479 32.2546C25.8479 31.7473 25.8482 31.24 25.8486 30.7327C25.8496 29.1771 25.8506 27.6216 25.8421 26.066C25.8403 25.7605 25.9118 25.5859 26.2106 25.4378C29.4518 23.8302 32.6858 22.2083 35.9136 20.5743C36.2118 20.4233 36.387 20.4437 36.607 20.6884C36.8227 20.9283 37.0537 21.1543 37.2848 21.3804C37.4334 21.5258 37.582 21.6712 37.7266 21.8203C39.2255 23.3664 39.2209 25.7342 37.7108 27.2624C36.1599 28.8318 34.6064 30.3986 33.0528 31.9654L33.0528 31.9654C32.364 32.66 31.6752 33.3546 30.9867 34.0495L29.8215 35.2257L29.8199 35.2274C28.8108 36.2461 27.8018 37.2649 26.7912 38.2822C26.7462 38.3275 26.6999 38.3776 26.6525 38.4289C26.4318 38.6677 26.1869 38.9327 25.9347 38.8611C25.7717 38.8147 25.802 38.5263 25.8313 38.2484C25.8427 38.1398 25.854 38.0328 25.8535 37.9425C25.8451 36.5226 25.8461 35.1025 25.8472 33.6825C25.8475 33.2065 25.8479 32.7305 25.8479 32.2546ZM22.1579 33.4273C22.1578 33.0412 22.1578 32.655 22.1578 32.2689C22.1578 31.7777 22.1576 31.2864 22.1573 30.7952C22.1566 29.2073 22.1559 27.6193 22.1626 26.0315C22.1637 25.7627 22.1098 25.5937 21.842 25.4607C18.5587 23.8285 15.2811 22.1846 12.0062 20.5356C11.7774 20.4203 11.6331 20.4379 11.4576 20.6283C11.2355 20.8692 11.0018 21.0993 10.7681 21.3293C10.634 21.4613 10.5 21.5933 10.3681 21.7274C8.73624 23.3856 8.751 25.7117 10.3938 27.3675C12.1458 29.1335 13.8969 30.9004 15.648 32.6673C17.4963 34.5322 19.3445 36.3972 21.1939 38.261C21.3638 38.4322 21.5528 38.5866 21.7445 38.7336C21.7648 38.7491 21.7855 38.7674 21.8068 38.7862C21.8924 38.862 21.9866 38.9453 22.0951 38.8839C22.193 38.8285 22.1785 38.7182 22.1645 38.6125C22.1597 38.5757 22.1549 38.5394 22.155 38.5062C22.1582 36.8133 22.158 35.1203 22.1579 33.4273Z"
        />
      </Link>
      <Link title="View on CoinmarketCap" subtitle="coinmarketcap.com">
        <Icon
          color="#2849F6"
          path="M38.0158 24.1896V24.2519H38.0011C38.089 26.431 37.2504 28.2401 35.7122 29.24C34.4766 30.0411 32.9025 30.1043 31.6067 29.4048C30.2077 28.621 29.4093 27.0316 29.4093 25.0429V22.3291C29.3214 22.4573 29.2225 22.6038 29.12 22.7759L25.8239 28.112C24.7142 29.9138 23.6558 30.053 22.9636 29.8516C22.2714 29.6501 21.4474 28.9616 21.4474 26.8338V22.406L15.4778 32.0014C17.5077 34.3229 20.3965 35.7163 23.477 35.8601C26.5575 36.0039 29.5634 34.8855 31.8008 32.7631C32.0475 32.5373 32.3742 32.4192 32.7083 32.435C33.0424 32.4509 33.3564 32.5993 33.5807 32.8474C34.0637 33.3729 34.0343 34.1891 33.5148 34.6785C30.9429 37.1147 27.5352 38.4726 23.9927 38.4727C16.2688 38.4727 9.98425 32.0893 9.98425 24.2482C9.98425 16.4071 16.2908 10.0273 23.9927 10.0273C31.6946 10.0273 37.9645 16.3705 38.0158 24.1896ZM32.8263 27.1268C33.3157 27.3749 33.9016 27.3356 34.3534 27.0243H34.3571C35.1152 26.5445 35.5181 25.5557 35.4558 24.3141V24.2812V24.2482C35.4558 17.8318 30.3102 12.613 23.9927 12.613C17.6752 12.613 12.5479 17.8318 12.5479 24.2482C12.5409 26.1533 12.9985 28.0314 13.881 29.7197L20.5135 19.0733C21.3155 17.8501 22.1396 17.7842 22.6889 17.9453C23.5203 18.187 23.9597 18.9964 23.9927 20.3478V26.2076L26.9592 21.4062C26.9667 21.3942 26.9745 21.3818 26.9824 21.3691C27.4818 20.5699 28.7213 18.5866 30.3725 19.0697C31.365 19.359 31.9583 20.4247 31.9583 21.9226V25.0429C31.9583 26.0611 32.2623 26.8082 32.8263 27.1268Z"
        />
      </Link>
    </ScrollView>
  );
}

export default List;
