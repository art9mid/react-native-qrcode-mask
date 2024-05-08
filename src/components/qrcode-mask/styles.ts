import React from 'react';
import { type ColorValue, StyleSheet } from 'react-native';

interface IQrcodeMaskPropsStyles {
  size: number;
  borderRadius: number;
  paddingFromMainContainer: number;
  borderWidth: number;
  borderColor: ColorValue;
}

const useDynamicStyles = ({
  size,
  borderRadius,
  paddingFromMainContainer,
  borderWidth,
}: IQrcodeMaskPropsStyles) => {
  return React.useMemo(() => {
    return StyleSheet.create({
      container: {
        position: 'relative',
        flex: 1,
        zIndex: 1,
      },
      icon: {
        ...StyleSheet.absoluteFillObject,
        zIndex: 1,
      },
      square: {
        flex: 1,
        zIndex: 2,
        justifyContent: 'center',
        alignItems: 'center',
      },
      block: {
        width: size - paddingFromMainContainer,
        height: size - paddingFromMainContainer,
        borderRadius: borderRadius,
      },
      border: {
        position: 'absolute',
        width: borderRadius * 2,
        height: borderRadius * 2,
      },
      borderTopRight: {
        top: 0,
        right: 0,
        borderTopRightRadius: borderRadius,
        borderTopWidth: borderWidth,
        borderRightWidth: borderWidth,
      },
      borderTopLeft: {
        top: 0,
        left: 0,
        borderTopLeftRadius: borderRadius,
        borderTopWidth: borderWidth,
        borderLeftWidth: borderWidth,
      },
      borderBottomRight: {
        bottom: 0,
        left: 0,
        borderBottomLeftRadius: borderRadius,
        borderBottomWidth: borderWidth,
        borderLeftWidth: borderWidth,
      },
      borderBottomLeft: {
        bottom: 0,
        right: 0,
        borderBottomRightRadius: borderRadius,
        borderBottomWidth: borderWidth,
        borderRightWidth: borderWidth,
      },
    });
  }, [size, borderRadius, paddingFromMainContainer, borderWidth]);
};

export default useDynamicStyles;
