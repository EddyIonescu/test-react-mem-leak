import { useState, useEffect } from 'react';


export default function MemLeaker() {
  const [stuff, setStuff] = useState();
  const [updateStuff, setUpdateStuff] = useState();
  const getNewStuff = async () => {
    const newStuff = [];
    for (let i = 0; i < 10000000; i++) {
      newStuff.push({
        "lots of stuff": "really long string that takes up space",
      });
    }
    setStuff(newStuff);
    console.log(newStuff.length);
  }
  useEffect(() => {
   
    getNewStuff();
  }, [updateStuff]);
  return (<>
    <button onClick={() => setUpdateStuff(!updateStuff)}>
      Click me!
    </button>
    {stuff && stuff.length}
    </>
  )
}