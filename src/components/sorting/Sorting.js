import "./sorting.css";
import { useEffect, useState } from "react";
import StraightIcon from '@mui/icons-material/Straight';
import { Button } from "@mui/material";

const BATCHES = [
  {
    name: "Steven Spielberg",
    total: "97",
    attendance: "92.8",
  },
  {
    name: "Martin Scorsese",
    total: "96.5",
    attendance: "92.4",
  },
  {
    name: "Chirstopher Nolan",
    total: "98",
    attendance: "95.0",
  },
  {
    name: "Quentin Tarantino",
    total: "96",
    attendance: "90.2",
  },
  {
    name: "James Cameron",
    total: "95",
    attendance: "97",
  },
  {
    name: "Alfred Hitchcock",
    total: "95.4",
    attendance: "86",
  },
];

const title ="12th Quarterly-Exams Report";


const Sorting = () => {
    const [batchesList,setBatchesList] = useState(BATCHES);

    useEffect(()=>{
        sortByTotal(BATCHES);
    },[]);

    const sortByTotal = () => {
        let ret = batchesList.slice();
        ret.sort((batch_srt, batch_end) => {
            if (batch_srt.total > batch_end.total) {
                return -1;
            }
            if (batch_srt.total < batch_end.total) {
                return 1;
            }
            return 0;
        })
        setBatchesList(ret);
    }

    const sortByAttendance = () => {
        let ret = batchesList.slice();
        ret.sort((batch_srt,batch_end)=> {
            if (batch_srt.attendance > batch_end.attendance) {
                return -1;
            }
            if (batch_srt.attendance < batch_end.attendance) {
                return 1;
            }
            return 0;
        })
        setBatchesList(ret);
    }
  return (
    <div className="sorted-block">
        <h1>{title}</h1>
        <div className="table-block">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th onClick={()=> sortByTotal()}><Button sx={{ color: "white"}} >Total %</Button></th>
                        <th onClick={()=> sortByAttendance()}><Button sx={{ color: "white"}} >Attendance</Button></th>
                    </tr>
                </thead>
                <tbody>
                    {batchesList.map((batch,idx)=>{
                        return (
                            <tr key={idx}>
                                <td>{batch.name}</td>
                                <td>{batch.total}</td>
                                <td>{batch.attendance}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </div>
  );
};

export default Sorting;
