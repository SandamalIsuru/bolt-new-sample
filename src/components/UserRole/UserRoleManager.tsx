import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Plus, Minus } from 'lucide-react';

interface Permission {
  id: string;
  name: string;
  hasPermission: boolean;
  type: 'add' | 'remove';
}

interface PermissionSection {
  id: string;
  name: string;
  isExpanded: boolean;
  permissions: Permission[];
}

interface ReferenceDataItem {
  name: string;
  permissions: {
    view: boolean;
    create: boolean;
    delete: boolean;
    update: boolean;
    approve: boolean;
    superUser: boolean;
  };
}

export const UserRoleManager: React.FC = () => {
  const [userRoleId, setUserRoleId] = useState('System Admin');
  const [userRoleName, setUserRoleName] = useState('System Admin');
  
  const [permissionSections, setPermissionSections] = useState<PermissionSection[]>([
    {
      id: 'position-management',
      name: 'Position Management',
      isExpanded: true,
      permissions: [
        { id: 'view-position-widgets', name: 'View Position Management Widgets', hasPermission: true, type: 'add' },
        { id: 'initiate-transfers', name: 'Initiate Position Transfers', hasPermission: false, type: 'remove' }
      ]
    },
    {
      id: 'market-data',
      name: 'Market Data Management',
      isExpanded: true,
      permissions: [
        { id: 'view-market-widgets', name: 'View Market Data Management Widgets', hasPermission: false, type: 'remove' }
      ]
    },
    {
      id: 'position-updates',
      name: 'Position Updates',
      isExpanded: true,
      permissions: [
        { id: 'view-position-updates', name: 'View Position Updates Widgets', hasPermission: true, type: 'add' },
        { id: 'view-file-uploads', name: 'View File Uploads', hasPermission: true, type: 'add' },
        { id: 'upload-position-files', name: 'Upload Position Update Files', hasPermission: true, type: 'add' },
        { id: 'approve-file-uploads', name: 'Approve File Uploads', hasPermission: false, type: 'remove' }
      ]
    }
  ]);

  const [referenceData, setReferenceData] = useState<ReferenceDataItem[]>([
    {
      name: 'Accounts',
      permissions: { view: false, create: false, delete: false, update: false, approve: false, superUser: true }
    },
    {
      name: 'Clients',
      permissions: { view: true, create: true, delete: false, update: false, approve: false, superUser: false }
    },
    {
      name: 'Participants',
      permissions: { view: false, create: false, delete: false, update: false, approve: false, superUser: false }
    },
    {
      name: 'Connections',
      permissions: { view: false, create: false, delete: false, update: false, approve: false, superUser: true }
    }
  ]);

  const toggleSection = (sectionId: string) => {
    setPermissionSections(prev => 
      prev.map(section => 
        section.id === sectionId 
          ? { ...section, isExpanded: !section.isExpanded }
          : section
      )
    );
  };

  const togglePermission = (sectionId: string, permissionId: string) => {
    setPermissionSections(prev =>
      prev.map(section =>
        section.id === sectionId
          ? {
              ...section,
              permissions: section.permissions.map(permission =>
                permission.id === permissionId
                  ? { 
                      ...permission, 
                      hasPermission: !permission.hasPermission,
                      type: !permission.hasPermission ? 'add' : 'remove'
                    }
                  : permission
              )
            }
          : section
      )
    );
  };

  const toggleReferenceDataPermission = (itemName: string, permissionType: keyof ReferenceDataItem['permissions']) => {
    setReferenceData(prev =>
      prev.map(item =>
        item.name === itemName
          ? {
              ...item,
              permissions: {
                ...item.permissions,
                [permissionType]: !item.permissions[permissionType]
              }
            }
          : item
      )
    );
  };

  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg h-full overflow-y-auto">
      <h2 className="text-xl font-semibold mb-6">User Role</h2>
      
      {/* User Role Basic Info */}
      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium mb-2">
            User Role ID <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            value={userRoleId}
            onChange={(e) => setUserRoleId(e.target.value)}
            className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white focus:outline-none focus:border-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">
            User Role Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            value={userRoleName}
            onChange={(e) => setUserRoleName(e.target.value)}
            className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      {/* Updated Permissions */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-4">Updated Permissions</h3>
        
        {permissionSections.map((section) => (
          <div key={section.id} className="mb-4">
            <button
              onClick={() => toggleSection(section.id)}
              className="flex items-center w-full text-left py-2 hover:bg-gray-700 rounded"
            >
              {section.isExpanded ? (
                <ChevronDown className="w-4 h-4 mr-2" />
              ) : (
                <ChevronRight className="w-4 h-4 mr-2" />
              )}
              <span className="font-medium">{section.name}</span>
            </button>
            
            {section.isExpanded && (
              <div className="ml-6 mt-2 space-y-2">
                {section.permissions.map((permission) => (
                  <div key={permission.id} className="flex items-center py-1">
                    <button
                      onClick={() => togglePermission(section.id, permission.id)}
                      className={`flex items-center justify-center w-6 h-6 rounded-full mr-3 ${
                        permission.hasPermission
                          ? 'bg-blue-600 hover:bg-blue-700'
                          : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                    >
                      {permission.hasPermission ? (
                        <Plus className="w-4 h-4" />
                      ) : (
                        <Minus className="w-4 h-4" />
                      )}
                    </button>
                    <span className="text-sm">{permission.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Reference Data */}
      <div>
        <div className="flex items-center mb-4">
          <ChevronDown className="w-4 h-4 mr-2" />
          <h3 className="text-lg font-medium">Reference Data</h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-600">
                <th className="text-left py-2 px-2"></th>
                <th className="text-center py-2 px-2">View</th>
                <th className="text-center py-2 px-2">Create</th>
                <th className="text-center py-2 px-2">Delete</th>
                <th className="text-center py-2 px-2">Update</th>
                <th className="text-center py-2 px-2">Approve</th>
                <th className="text-center py-2 px-2">Super User</th>
              </tr>
            </thead>
            <tbody>
              {referenceData.map((item) => (
                <tr key={item.name} className="border-b border-gray-700">
                  <td className="py-2 px-2 font-medium">{item.name}</td>
                  {Object.entries(item.permissions).map(([permissionType, hasPermission]) => (
                    <td key={permissionType} className="text-center py-2 px-2">
                      <button
                        onClick={() => toggleReferenceDataPermission(item.name, permissionType as keyof ReferenceDataItem['permissions'])}
                        className={`flex items-center justify-center w-6 h-6 rounded-full mx-auto ${
                          hasPermission
                            ? 'bg-blue-600 hover:bg-blue-700'
                            : 'bg-gray-600 hover:bg-gray-500'
                        }`}
                      >
                        {hasPermission ? (
                          <Plus className="w-4 h-4" />
                        ) : (
                          <Minus className="w-4 h-4" />
                        )}
                      </button>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};