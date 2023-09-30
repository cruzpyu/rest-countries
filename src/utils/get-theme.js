import useThemeStore from "../store/theme-store";

import { colors } from "../style/colors";

export const GetTheme = () => {
  const { theme } = useThemeStore();
  return colors[theme];
};
