import { Typography, useTheme } from "@mui/material";
import { MenuItem } from "react-pro-sidebar";
import { tokens } from "../../styles/theme";
import { ReactNode } from "react";
import {Link} from 'react-router-dom';
import * as React from "react"


interface MenuItemProps {
    menu: {
        icon: ReactNode;
        path: string;
        title: string;
    };
    selected: string;
    setSelected: (path: string) => void;
}

const SidebarMenuItem: React.FC<MenuItemProps> = ({ menu, selected, setSelected }) => {
    const themes = useTheme();
    const color = tokens(themes.palette.mode);

    return (
        <MenuItem
            icon={menu.icon}
            active={selected === menu.path}
            onClick={() => setSelected(menu.path)}
            style={{ color: color.primary[100] }}
        >
            <Typography>{menu.title}</Typography>
            <Link to={menu.path} />
        </MenuItem>
    );
};

export default SidebarMenuItem;
