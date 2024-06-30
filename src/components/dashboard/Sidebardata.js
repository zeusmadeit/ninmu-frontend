import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import SettingsIcon from '@mui/icons-material/Settings';

export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/home"
    },
    {
        title: "Goals",
        icon: <TaskAltIcon />,
        link: "/goals"
    },
    {
        title: "Challenges",
        icon: <LocalActivityIcon />,
        link: "/challenges"
    },
    {
        title: "Settings",
        icon: <SettingsIcon />,
        link: "/settings"
    },
];