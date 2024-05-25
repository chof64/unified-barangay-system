export interface NavigationRoute {
  name: string;
  href: string;
}

export interface RouteVariant {
  href: string;
  isOverlay?: boolean;
  isTransparent?: boolean;
}
