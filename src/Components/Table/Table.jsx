import "./Table.css";

const Table = (props) => {
  const dataString = `Name,LName,Address,City,State
  John,Doe,120 jefferson st.,Riverside, NJ
  Jack,McGinnis,220 hobo Av.,Phila, PA
  John Da Man,Repici,120 Jefferson St.,Riverside, NJ
  Stephen,Tyler,7452 Terrace At the Plaza road,SomeTown,SD
  John,Blankman,,SomeTown, SD
  Joan the bone Anne,Jet,9th at Terrace plc,Desert City,CO
  `;
  let headings = dataString.split("\n")[0].split(",");
  let body = dataString.split("\n").slice(1);
  return (
    <div>
      <table>
        <thead>
          <tr>
            {headings.map((value) => {
              return <th>{value}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {body.map((row) => {
            return (
              <tr>
                {row.split(",").map((element) => {
                  return <td>{element}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
