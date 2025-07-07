import { useLaunchParams, useSignal } from '@telegram-apps/sdk-react';
import { initData } from '@telegram-apps/sdk-react';
import './App.css';

function App() {
  // Get the user data from the initData component.
  // useSignal is a hook that allows reading the value from a signal.
  const user = useSignal(initData.user);
  
  // Get the launch parameters.
  const launchParams = useLaunchParams();

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Telegram Mini App</h1>
        <p>User Information & Launch Parameters</p>
      </header>

      {/* Display User Information if available */}
      {user ? (
        <div className="card">
          <h2 className="card-title">User Information</h2>
          <ul className="info-list">
            <li><strong>ID:</strong> <span>{user.id}</span></li>
            <li><strong>First Name:</strong> <span>{user.first_name}</span></li>
            <li><strong>Last Name:</strong> <span>{user.last_name || 'N/A'}</span></li>
            <li><strong>Username:</strong> <span>@{user.username || 'N/A'}</span></li>
            <li><strong>Is Premium:</strong> <span>{user.is_premium ? 'Yes' : 'No'}</span></li>
            <li><strong>Language Code:</strong> <span>{user.language_code}</span></li>
          </ul>
        </div>
      ) : (
        <div className="card">
          <h2 className="card-title">User Information</h2>
          <p>Loading user data or not running in Telegram...</p>
        </div>
      )}

      {/* Display all launch parameters for debugging */}
      <div className="card">
        <h2 className="card-title">All Launch Parameters</h2>
        <pre className="code-block">
          {JSON.stringify(launchParams, null, 2)}
        </pre>
      </div>
    </div>
  );
}

export default App
