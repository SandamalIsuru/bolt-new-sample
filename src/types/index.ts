export interface NavigationItem {
  id: string;
  label: string;
  icon: string;
  children?: NavigationItem[];
  badge?: number;
}

export interface Widget {
  id: string;
  title: string;
  component: React.ComponentType;
  defaultSize: { w: number; h: number };
}

export interface GridLayout {
  i: string;
  x: number;
  y: number;
  w: number;
  h: number;
  minW?: number;
  minH?: number;
}