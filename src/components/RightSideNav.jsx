// RightSideNav.jsx
import { FaHome, FaUser, FaFolderOpen, FaGift, FaAward, FaGraduationCap, FaWrench, FaEnvelope } from 'react-icons/fa';

const items = [
  { id: 'home', icon: <FaHome /> },
  { id: 'profile', icon: <FaUser /> },
  { id: 'projects', icon: <FaFolderOpen /> },
  { id: 'services', icon: <FaGift /> },
  { id: 'certs', icon: <FaAward /> },
  { id: 'education', icon: <FaGraduationCap /> },
  { id: 'tools', icon: <FaWrench /> },
  { id: 'contact', icon: <FaEnvelope /> },
];

const RightSideNav = ({ activeId, onChange }) => {
  return (
    <div className="right-nav">
      {items.map((item) => {
        const isActive = item.id === activeId;
        return (
          <button
            key={item.id}
            className={`right-nav-item ${isActive ? 'active' : ''}`}
            onClick={() => onChange?.(item.id)}
          >
            {item.icon}
          </button>
        );
      })}
    </div>
  );
};

export default RightSideNav;
