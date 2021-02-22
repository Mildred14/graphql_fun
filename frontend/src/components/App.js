import React, { useState } from 'react';
import User from './User'
import Users from './Users'

const App = () => {
  const [userSelected, setUserSelected] = useState(null)

  return (
    <div className="App">
      {userSelected ?
        <User user={userSelected}  userSelected={setUserSelected} /> :
        <Users userSelected={setUserSelected} />
      }
    </div>
  );
}

export default App;
