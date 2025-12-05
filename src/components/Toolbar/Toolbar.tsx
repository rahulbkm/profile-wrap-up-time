import React from 'react';
import {
  FaArrowLeft,
  FaFile,
  FaExternalLinkAlt,
  FaSave,
  FaPlus,
  FaTrash,
  FaSyncAlt,
  FaKey,
  FaShareAlt,
  FaChevronDown,
} from 'react-icons/fa';
import './Toolbar.css';

const Toolbar: React.FC = () => {
  return (
    <div className="toolbar">
      <div className="toolbar-left">
        <button className="toolbar-btn icon-only" title="Back">
          <FaArrowLeft />
        </button>
        <button className="toolbar-btn icon-only" title="Document">
          <FaFile />
        </button>
        <button className="toolbar-btn icon-only" title="External link">
          <FaExternalLinkAlt />
        </button>
        <div className="toolbar-separator"></div>
        <button className="toolbar-btn">
          <FaSave />
          <span>Save</span>
        </button>
        <button className="toolbar-btn">
          <FaSave />
          <span>Save & Close</span>
        </button>
        <button className="toolbar-btn">
          <FaPlus />
          <span>New</span>
        </button>
        <button className="toolbar-btn">
          <FaTrash />
          <span>Delete</span>
        </button>
        <button className="toolbar-btn icon-only" title="Refresh">
          <FaSyncAlt />
        </button>
        <button className="toolbar-btn">
          <FaKey />
          <span>Check Access</span>
        </button>
      </div>
      <div className="toolbar-right">
        <button className="toolbar-btn">
          <FaShareAlt />
          <span>Share</span>
          <FaChevronDown className="dropdown-icon" />
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
