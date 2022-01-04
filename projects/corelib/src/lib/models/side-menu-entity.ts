export interface SideMenuEntity {
  label?: string | null;
  icon?: string | null;
  routerLink?: string[] | null;
  securityPolicy?: string | null;
  items: SubSideMenuEntity[];
}

export interface SubSideMenuEntity {
  label?: string | null;
  icon?: string | null;
  routerLink?: string | null;
  securityPolicy?: string | null;
}
