import type { ColorValue } from 'react-native';

export interface QrcodeMaskProps {
  // Height and width of the QR code block. Default: 250px.
  size?: number;

  // Padding between the inner borders and the outer container. Default: 30px.
  paddingFromMainContainer?: number;

  // Radius of rounding for all corners of the masking block. Default: 15px.
  borderRadius?: number;

  // Width of the border of the masking block. Default: 2px.
  borderWidth?: number;

  // Color of the border of the masking block. Default: rgb(0,0,0).
  borderColor?: ColorValue;

  // Color of the overlay above the masking block. Default: rgba(0,0,0,6).
  overlayColor?: ColorValue;

  // Hide or show the masking block: Default false.
  hideMask?: boolean;
}
