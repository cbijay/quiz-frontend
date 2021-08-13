import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import {
  Group as GroupIcon,
  Assignment as AssignmentIcon,
  Receipt as ReceiptIcon,
  ContactSupport as ContactSupportIcon,
  Message as MessageIcon,
  Event as EventIcon,
  Payment as PaymentIcon,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const menuList = [
  {
    name: "Dashboard",
    icon: <DashboardIcon />,
    url: "/admin",
  },
  {
    name: "Students",
    icon: <GroupIcon />,
    url: "/admin/students",
  },
  {
    name: "Topics",
    icon: <AssignmentIcon />,
    url: "/admin/topics",
  },
  {
    name: "Questions",
    icon: <ContactSupportIcon />,
    url: "/admin/questions",
  },
  {
    name: "Student Report",
    icon: <ReceiptIcon />,
    url: "/admin/reports",
  },
  {
    name: "Messages",
    icon: <MessageIcon />,
    url: "/admin/messages",
  },
  {
    name: "Events",
    icon: <EventIcon />,
    url: "/admin/events",
  },
  {
    name: "Payments",
    icon: <PaymentIcon />,
    url: "/admin/payments",
  },
];

export const AppSidebarItems = (
  <div>
    {menuList.map(({ name, icon, url }, index) => (
      <ListItem button component={Link} to={url} key={index}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={name} />
      </ListItem>
    ))}
  </div>
);
