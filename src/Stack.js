export default function Stack(props) {
    return (
      <div className = 'item'>
        <img src={props.logo} alt={`${props.name} logo`}/>
          <div className = 'overlay'>
            <h2>{props.name}</h2>
          </div>
      </div>
    );
  }