import * as React from 'react';
import { View } from 'react-native';
import Svg, { Mask, Rect } from 'react-native-svg';
import { moderateScale } from 'react-native-size-matters';

import useDynamicStyles from './styles';
import type { QrcodeMaskProps } from './interfaces';

const QR_CODE_SIZE = moderateScale(250);
const QR_CODE_BORDER_RADIUS = moderateScale(15);
const QR_CODE_BORDER_PADDING_FROM_MAIN_CONTAINER = moderateScale(30);
const QR_CODE_BORDER_WIDTH = moderateScale(2);

const QrcodeMask: React.FC<QrcodeMaskProps> = ({
  size = QR_CODE_SIZE,
  paddingFromMainContainer = QR_CODE_BORDER_PADDING_FROM_MAIN_CONTAINER,
  borderRadius = QR_CODE_BORDER_RADIUS,
  borderWidth = QR_CODE_BORDER_WIDTH,
  borderColor = 'rgb(0,0,0)',
  overlayColor = 'rgba(0,0,0,6)',
  hideMask = false,
}) => {
  const styles = useDynamicStyles({
    size,
    borderRadius,
    borderWidth,
    paddingFromMainContainer,
    borderColor,
  });

  return (
    <View style={styles.container} pointerEvents="none">
      {!hideMask && (
        <View style={styles.square}>
          <View style={styles.block}>
            <View style={[styles.border, styles.borderTopRight]} />
            <View style={[styles.border, styles.borderTopLeft]} />
            <View style={[styles.border, styles.borderBottomRight]} />
            <View style={[styles.border, styles.borderBottomLeft]} />
          </View>
        </View>
      )}
      <Svg style={styles.icon} height="100%" width="100%">
        <Mask id="mask" x={0} y={0} height="100%" width="100%">
          <Rect height="100%" width="100%" fill="#fff" />
          <Rect
            x="50%"
            y="50%"
            transform={`translate(${(size / 2) * -1}, ${(size / 2) * -1})`}
            width={size}
            height={size}
            fill="#000"
            rx={borderRadius}
          />
        </Mask>
        <Rect
          height="100%"
          width="100%"
          fill={overlayColor}
          mask="url(#mask)"
        />
      </Svg>
    </View>
  );
};

export default QrcodeMask;
