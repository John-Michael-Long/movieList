var EnterMovie = (props) => (
  <form>
    <input type="text" id="movieEntry"></input>
    <button onClick={props.onEntryClick}>Submit</button>
  </form>
  )