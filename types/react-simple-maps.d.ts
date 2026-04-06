declare module 'react-simple-maps' {
  import { ComponentType, ReactNode, CSSProperties } from 'react';

  interface ComposableMapProps {
    projection?: string;
    projectionConfig?: {
      scale?: number;
      center?: [number, number];
      rotate?: [number, number, number];
    };
    width?: number;
    height?: number;
    style?: CSSProperties;
    children?: ReactNode;
  }

  interface GeographiesProps {
    geography: string | object;
    children: (data: { geographies: any[] }) => ReactNode;
  }

  interface GeographyProps {
    geography: any;
    style?: {
      default?: CSSProperties;
      hover?: CSSProperties;
      pressed?: CSSProperties;
    };
    onMouseEnter?: (event: any) => void;
    onMouseLeave?: (event: any) => void;
    onClick?: (event: any) => void;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
  }

  interface ZoomableGroupProps {
    center?: [number, number];
    zoom?: number;
    onMoveEnd?: (position: any) => void;
    children?: ReactNode;
  }

  export const ComposableMap: ComponentType<ComposableMapProps>;
  export const Geographies: ComponentType<GeographiesProps>;
  export const Geography: ComponentType<GeographyProps>;
  export const ZoomableGroup: ComponentType<ZoomableGroupProps>;
  export const Marker: ComponentType<any>;
  export const Annotation: ComponentType<any>;
  export const Graticule: ComponentType<any>;
  export const Line: ComponentType<any>;
  export const Sphere: ComponentType<any>;
}
