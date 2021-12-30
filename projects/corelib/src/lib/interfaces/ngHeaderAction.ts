export interface NgHeaderAction {
  id?: string;
  label?: string;
  icon?: string;
  iconPosition?: string;
  ngClass?: any;
  style?: string;
  loadinIcon?: string;
  loading?: boolean;
  disabled?: boolean;
  visible?: boolean;
  command?: () => void;
}
