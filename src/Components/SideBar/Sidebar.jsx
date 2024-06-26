import {
  Card,
  // Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";



const Sidebar = () => {

  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };



  return (

    <div>
      <Card className="h-[90vh] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <List>
          <ListItem onClick={(()=>navigate('/'))}>
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            Dashboard
          </ListItem>
          <ListItem onClick={(()=>navigate('teacher'))}>
            <ListItemPrefix>
              <ShoppingBagIcon className="h-5 w-5" />
            </ListItemPrefix>
            Teacher
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Inbox
            <ListItemSuffix>
              <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
            </ListItemSuffix>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Profile
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Settings
          </ListItem>
          <ListItem onClick={handleLogout} className="cursor-pointer">
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </Card>

    </div>
  );
}

export default Sidebar;