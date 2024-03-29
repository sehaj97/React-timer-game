import { useRef, useState } from "react";

export default function Player() {
  const player = useRef()
  const [playerName, setPlayerName] = useState(null)
  // const [isSubmitted, setIsSubmitted] = useState(false)
  // function handleChange(event) {
  //   setIsSubmitted(false)
  //   setPlayerName(event.target.value)
  // }
  function handleClick() {
    // setIsSubmitted(true)
    setPlayerName(player.current.value)
  }
  return (
    <section id="player">
      {/* <h2>Welcome {(isSubmitted) ? playerName : "unknown entity"}</h2> */}
      <h2>Welcome {playerName ?? "unknown entity"}</h2>
      <p>
        {/* <input ref={player} type="text" onChange={handleChange} value={playerName} /> */}
        <input ref={player} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
