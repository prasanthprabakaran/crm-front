import "./dashboard.css";
import { Box, Button, Container } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SchoolIcon from "@mui/icons-material/School";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import { experimentalStyled as styled } from "@mui/material/styles";
import { Paper } from "@mui/material";
import Widget from "../widget/Widget";

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ListAltIcon from "@mui/icons-material/ListAlt";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import Slides from "../slides/Slides";
import Sorting from "../sorting/Sorting";

const Widgets = [
  {
    id: "01",
    type: "Classes",
    value: "32",
    icon: <i className="fas fa-school"></i>,
    color: "#4e73df",
    borderLeft: "0.25rem solid #4e73df",
  },
  {
    id: "02",
    type: "STUDENTS(TOTAL)",
    value: "972",
    icon: <i className="fas fa-graduation-cap"></i>,
    color: "#1cc88a",
    borderLeft: "0.25rem solid #1cc88a",
    style: {
      color: "#1cc88a",
      borderLeft: "0.25rem solid #1cc88a",
    },
  },
  {
    id: "03",
    type: "APPLICATIONS",
    value: "150",
    icon: <ListAltIcon fontSize="large" />,
    color: "#36b9cc",
    borderLeft: "0.25rem solid #36b9cc",
  },
  {
    id: "04",
    type: "PENDING REQUESTS",
    value: "18",
    icon: <QuestionAnswerIcon fontSize="large" />,
    color: "#f6c23e",
    borderLeft: "0.25rem solid #f6c23e",
  },  {
    id: "05",
    type: "TEACHERS(TOTAL)",
    value: "41",
    icon: <i className="fas fa-chalkboard-teacher"></i>,
    color: "#ff39ee",
    borderLeft: "0.25rem solid #ff39ee",
  },
];


const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Container className="home-container">
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 3, sm: 6, md: 9 }}
        className="d-grid"
      >
        {Widgets.map((list, index) => (
          <Grid className="w-grid" xs={2} sm={2} md={2} key={index}>
            <Widget key={list.id} list={list} />
          </Grid>
        ))}
      </Grid>
      <Grid id="btm-grid" container spacing={2}>
        <Grid item xs={6}>
          <Slides />
        </Grid>
        <Grid item xs={6}>
          <Sorting/>
        </Grid>
        <Grid item xs={6}>
          <Box className="choose-box student">
            <span id="C-heading">Student</span>
            <Button
              endIcon={<SchoolIcon />}
              variant="contained"
              color="success"
              className="button-class"
              onClick={() => navigate("/student-dashboard")}
            >
              Click Here
            </Button>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box className="choose-box teacher">
            <span id="C-heading">Teacher</span>
            <Button
              endIcon={<AccountCircleIcon />}
              variant="contained"
              color="success"
              className="button-class"
              onClick={() => navigate("/teacher")}
            >
              Proceed
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
