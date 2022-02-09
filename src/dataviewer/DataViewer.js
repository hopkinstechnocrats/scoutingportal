import {DataGrid} from '@mui/x-data-grid';
import {collection, getFirestore, query, getDocs, where} from "../firebase";
import {useEffect, useState} from "react";

function DataViewer() {
  const columns = [
    {
      field: "team",
      headerName: "Team"
    },
    {
      field: "autopoints",
      headerName: "Average Auto Points",
      width: 200
    }
  ];

  const [rows, updateRows] = useState([{team: 0, autopoints: 0}]);


  const queryTeamData = async (teamNumber) => {
    console.log("QUERY TEAM DATA");
    const q = query(
      collection(getFirestore(), "events"),
      where("team", "==", teamNumber.toString()),
      where("action", "==", "score"),
      where("period", "==", "auto")
    );
    console.log(q);
    const events = await getDocs(q);
    let autoPoints = 0;
    let matchesPlayed = [];

    for (const event of events.docs) {
      console.log("PROCESS EVENT");
      if (!matchesPlayed.includes(event.data().match)) {
        matchesPlayed.push(event.data().match);
      }
      if (event.data().goal === "lowhub") {
        autoPoints += 2;
      } else if (event.data().goal === "highhub") {
        autoPoints += 4;
      }
    }
    console.log("team: ")
    console.log(teamNumber);
    console.log(autoPoints);
    return {
      team: teamNumber,
      autopoints: autoPoints / matchesPlayed.length
    };
  };

  useEffect(() => {
    const getData = async () => {
      console.log("GET DATA");
      const teams = await getDocs(query(collection(getFirestore(), "teams")));
      let newrows = [];
      console.log("teams: ");
      console.log(teams);
      for (const team of teams.docs) {
        const result = await queryTeamData(team.data().number);
        console.log(result);
        newrows = [...newrows, result];
      }
      console.log("PRERETURN NEWROWS:");
      console.log(newrows);
      return newrows;
    };
    console.log("starting effect");
    getData()
      .then((newrows) => {
        updateRows(newrows);
        console.log("NEWROWS:")
        console.log(newrows);
      })
      .then(() => console.log("completed effect"));
  }, [])
  console.log("RENDERING:");
  console.log(rows);

  return (
    <div style={{display: 'flex', height: '100%'}}>
      <div style={{flexGrow: 1}}>
        <DataGrid columns={columns} rows={rows} getRowId={(row) => row.team}/>
      </div>
    </div>
  );
}

export default DataViewer;