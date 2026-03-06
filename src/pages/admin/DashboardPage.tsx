import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Settings, LogOut, Mail, Phone, Users } from 'lucide-react';
import { BASE_URL } from '../../config/api';

interface Registration {
  id: number;
  category: string;
  full_name: string;
  email: string;
  phone_number: string;
  team_name?: string;
  customTeam?: string;
  created_at: string;
}

export function AdminDashboardPage() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadRegistrations();
  }, []);

  const loadRegistrations = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}api/register/`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch registrations');
      }
      
      const data = await response.json();
      console.log('API Response Data:', data); // Debug: Log the actual response
      console.log('Sample registration:', data[0]); // Debug: Log first registration
      setRegistrations(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      console.error('Error fetching registrations:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleRefresh = () => {
    loadRegistrations();
  };

  const getTeamDisplay = (registration: Registration) => {
    console.log('=== FULL REGISTRATION OBJECT ===', registration); // Debug: Log entire registration object
    console.log('team_name value:', registration.team_name); // Debug: Log team_name field
    console.log('customTeam value:', registration.customTeam); // Debug: Log customTeam field
    console.log('team object:', registration.team); // Debug: Log team object
    console.log('typeof registration.team:', typeof registration.team); // Debug: Check team object type
    
    // First check for team object (preferred)
    if (registration.team?.name) {
      return registration.team.name;
    }
    // Fallback to team_name field (for when team object is null)
    if (registration.team_name === 'Other' && registration.customTeam) {
      return registration.customTeam;
    }
    // Final fallback to team_name field
    return registration.team_name || 'N/A';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-agora-purple mx-auto mb-4"></div>
          <p className="text-gray-600">Loading registrations...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error: {error}</p>
          <button 
            onClick={loadRegistrations}
            className="px-4 py-2 bg-agora-purple text-white rounded-lg hover:opacity-90"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-agora-purple rounded-lg">
                <Settings size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-sm text-gray-500">AGORA Events Registrations</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={handleRefresh}
                className="flex items-center gap-2 px-4 py-2 bg-agora-purple text-white rounded-lg hover:opacity-90"
                title="Refresh data"
              >
                <Settings size={20} />
                Refresh
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                <LogOut size={20} />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Total Registrations Card */}
        <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Total Registrations</h2>
              <p className="text-4xl font-bold text-agora-purple">{registrations.length}</p>
              <p className="text-sm text-gray-500 mt-1">People have registered for AGORA Events</p>
            </div>
            <div className="p-4 bg-agora-light rounded-full">
              <Users size={48} className="text-agora-purple" />
            </div>
          </div>
        </div>

        {/* Registration Details */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="px-6 py-4 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Registration Details</h2>
            <p className="text-sm text-gray-500">Complete information for all registered participants</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Full Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact Information
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Team/School
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Registration Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {registrations.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                      No registrations yet
                    </td>
                  </tr>
                ) : (
                  registrations.map((reg) => (
                    <tr key={reg.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        #{reg.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {reg.full_name}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Mail size={14} className="text-gray-400" />
                            <span>{reg.email}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone size={14} className="text-gray-400" />
                            <span>{reg.phone_number}</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          reg.category === 'player' ? 'bg-blue-100 text-blue-800' :
                          reg.category === 'fan' ? 'bg-green-100 text-green-800' :
                          reg.category === 'sponsor' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-purple-100 text-purple-800'
                        }`}>
                          {reg.category.charAt(0).toUpperCase() + reg.category.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {getTeamDisplay(reg)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(reg.created_at).toLocaleDateString()}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
