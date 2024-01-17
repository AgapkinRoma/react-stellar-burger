import "./set-active.css";
interface isActiveProps {
  isActive: boolean;
}
export const setActive = ({ isActive }: isActiveProps): string =>
  isActive ? "link link_active" : "link";
