import React from "react";
import "./widget.css";
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';



const Widget = ({ list }) => {

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
  }));

  return (
        <div className="widget" style={{borderLeft: list.borderLeft}}>
          <div className="left">
            <span className="widget-title" style={{ color: list.color }}>
              {list.type}
            </span>
            <div className="counter">
              <span className="counter-number">{list.value}</span>
              <BorderLinearProgress  variant="determinate" value={50} />
              </div>
          </div>
          <div className="right">
            <div className="widget-icon">{list.icon}</div>
          </div>
        </div>

  );
};

export default Widget;
