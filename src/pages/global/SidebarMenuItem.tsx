import { Typography, useTheme, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { MenuItem } from "react-pro-sidebar";
import { tokens } from "../../styles/theme";
import { ReactNode } from "react";
import {Link} from 'react-router-dom';
import * as React from "react"
import "react-pro-sidebar/dist/css/styles.css";


interface MenuItemProps {
    menu: {
        icon?: React.FC;
        path?: string;
        title?: string;
        tag?: string;
    };
    selected: string;
    setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const SidebarMenuItem: React.FC<MenuItemProps> = ({ menu, selected, setSelected }) => {
    const themes = useTheme();
    const color = tokens(themes.palette.mode);

    if (menu.tag === 'divider') {
        return (
          <Typography
            variant="h6"
            key={menu.title}
            color={color.grey[300]}
            sx={{ m: '15px 0 5px 20px' }}
          >
            {menu.title}
          </Typography>
        );
      }

    if (menu.icon && menu.path && menu.title) {
    return (
      <MenuItem
        icon={<menu.icon />}
        active={selected === menu.path}
        onClick={() => menu.path && setSelected(menu.path)}
        style={{ color: color.primary[100] }}
      >
        <Typography>{menu.title}</Typography>
        <Link to={menu.path} />
      </MenuItem>
    );
  }

  return null;
};

export default SidebarMenuItem;
