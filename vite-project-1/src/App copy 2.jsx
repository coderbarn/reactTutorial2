const App = () => {
  // Can only return a single element but you can have as much
  //    in that element that you want

  const name = 'Bill';
  const x = 10;
  const y = 7;
  const names = ['Crosby','Geno','Nala','Finn'];
  const loggedIn = true;
  const style1 = { // We dont need to do it this way since we are using Tailwind
    color:'green',
    fontSize: '55px'
  };

  return (
    <>
      <div className='text-5xl'>MyApp</div>
      <div style={{color:'red', fontSize:24}}>Hello {name}</div>
      <div style={style1}>The sum of {x} and {y} is {x + y}</div>
      <br></br>
      <div>
        <ul>
          {names.map((dogname, index) => (<li key={index}>
              {index} {dogname}
          </li>))}
        </ul>
      </div>
      <br></br>
      <div>
        { loggedIn ? <h1>You are logged in</h1> : <h2>You are NOT logged in</h2>}
      </div>
    </>
  );
        
};

export default App;
