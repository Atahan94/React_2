import "./List.css";

const ListE = (props) =>
{
  return(
    <div className="panel">
    {props.List.length > 0?
         props.List.map((el) => 
    
      (<div key = {el.name}>
        <p className="first">{el.name}</p>
        <p className="first">{el.age}</p>
        <br/>
        <p>{el.id}</p>
      </div>)
    ): (<p>There is Nobody</p>)}
    </div>
  );
};

export default ListE;