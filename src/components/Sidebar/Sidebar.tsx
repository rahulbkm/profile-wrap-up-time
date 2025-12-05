import React from 'react';
import {
  FaSearch,
  FaChartLine,
  FaUsers,
  FaRobot,
  FaComments,
  FaBullseye,
  FaListUl,
  FaRoute,
  FaStream,
  FaFolder,
  FaUserCog,
  FaClipboardCheck,
  FaDesktop,
  FaLightbulb,
  FaBook,
  FaUserFriends,
  FaChartBar,
  FaCalendar,
  FaFileContract,
  FaClock,
  FaEllipsisH,
} from 'react-icons/fa';
import './Sidebar.css';

interface MenuItem {
  icon: React.ReactElement;
  label: string;
}

interface MenuSection {
  title?: string;
  items: MenuItem[];
}

const Sidebar: React.FC = () => {
  const menuSections: MenuSection[] = [
    {
      items: [
        { icon: <FaLightbulb />, label: 'Guided channel s...' },
      ],
    },
    {
      title: 'Customer support',
      items: [
        { icon: <FaChartLine />, label: 'Overview' },
        { icon: <FaUsers />, label: 'User management' },
        { icon: <FaRobot />, label: 'AI Agents' },
        { icon: <FaComments />, label: 'Channels' },
        { icon: <FaBullseye />, label: 'Intent' },
        { icon: <FaListUl />, label: 'Queues' },
        { icon: <FaRoute />, label: 'Routing' },
        { icon: <FaStream />, label: 'Workstreams' },
        { icon: <FaFolder />, label: 'Case settings' },
        { icon: <FaUserCog />, label: 'Customer settings' },
        { icon: <FaClipboardCheck />, label: 'Quality managem...' },
      ],
    },
    {
      title: 'Support experience',
      items: [
        { icon: <FaChartLine />, label: 'Overview' },
        { icon: <FaDesktop />, label: 'Workspaces' },
        { icon: <FaLightbulb />, label: 'Productivity' },
        { icon: <FaBook />, label: 'Knowledge' },
        { icon: <FaUserFriends />, label: 'Collaboration' },
      ],
    },
    {
      title: 'Operations',
      items: [
        { icon: <FaChartLine />, label: 'Overview' },
        { icon: <FaChartBar />, label: 'Insights' },
        { icon: <FaCalendar />, label: 'Calendar' },
        { icon: <FaFileContract />, label: 'Service terms' },
        { icon: <FaClock />, label: 'Service scheduling' },
        { icon: <FaEllipsisH />, label: 'Miscellaneous' },
      ],
    },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-search">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search admin sett..." />
      </div>
      <nav className="sidebar-nav">
        {menuSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="menu-section">
            {section.title && (
              <div className="section-title">{section.title}</div>
            )}
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} className="menu-item">
                <span className="menu-icon">{item.icon}</span>
                <span className="menu-label">{item.label}</span>
              </div>
            ))}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
