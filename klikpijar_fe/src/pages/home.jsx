import {
  AppBar,
  Box,
  IconButton,
  Button,
  Modal,
  Fade,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "../components/homePage/css/header.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DataViewNotifikasiPasangan from "../components/homePage/table";
import ReservasiTerbaru from "../components/homePage/Reservasi terbaru";
import AkuPeduliTerbaru from "../components/homePage/Akupeduli terbaru";
import SkriningHIVTerbaru from "../components/homePage/Skrining HIV terbaru";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const page = [
    { pageName: "Dashboard", pagePath: "/", accordion: false },
    {
      pageName: "Reservasi",
      child: [
        { childName: "Data Test HIV", pagePath: "/" },
        { childName: "Data Refil ARV", pagePath: "/" },
        { childName: "Data Viral Load", pagePath: "/" },
      ],
      accordion: true,
    },
    {
      pageName: "Notifikasi Pasangan",
      child: [
        { childName: "Data View", pagePath: "/" },
        { childName: "Data Komunitas", pagePath: "/" },
      ],
      accordion: true,
    },
    {
      pageName: "Skrining HIV Mandiri",
      child: [{ childName: "Data View", pagePath: "/" }],
      accordion: true,
    },
    {
      pageName: "Info Prep",
      child: [{ childName: "Data View", pagePath: "/" }],
      accordion: true,
    },
    {
      pageName: "Cascade",
      child: [
        { childName: "Cascade Total", pagePath: "/" },
        { childName: "Cascade Tes HIV", pagePath: "/" },
        { childName: "Cascade Refil ARV", pagePath: "/" },
        { childName: "Cascade VIral Load", pagePath: "/" },
      ],
      accordion: true,
    },
    { pageName: "Users", pagePath: "/6", accordion: false },
    {
      pageName: "Pengaturan",
      child: [{ childName: "Fasyankes", pagePath: "/" }],
      accordion: true,
    },
  ];

  const handleChange = (pageExpanded) => (event, isExpanded) => {
    setExpanded(!expanded || expanded != pageExpanded ? pageExpanded : false);
  };

  return (
    <>
      <AppBar position="sticky" sx={{ bgcolor: "black" }}>
        <Box className="header">
          <Box className="header-mobile">
            <IconButton
              onClick={() => {
                navigate("/");
              }}
              disableRipple
            >
              <img
                className="logo-transition"
                height={"40px"}
                alt="Klikpijar"
                src={"https://klikpijar.id/public/assets/img/co.png"}
              />
            </IconButton>

            <Box sx={{ color: "#4e4c5f" }}>
              <Button
                variant="text"
                disableRipple
                onClick={() => {
                  setOpen(true);
                }}
              >
                <LeaderboardIcon />
              </Button>
              <Button variant="text" disableRipple>
                <MoreVertIcon />
              </Button>
            </Box>
          </Box>
        </Box>
      </AppBar>
      <ReservasiTerbaru />
      <AkuPeduliTerbaru />
      <SkriningHIVTerbaru />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        closeAfterTransition
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "0",
              left: "0",
              width: 400,
              bgcolor: "#282733",
              height: "100%",
            }}
          >
            <List sx={{ width: "100%", color: "white" }} component={"nav"}>
              {page.map((menu) => {
                return (
                  <>
                    <ListItemButton
                      onClick={
                        menu.accordion
                          ? handleChange(menu.pageName)
                          : () => {
                              navigate(menu.pagePath);
                            }
                      }
                    >
                      <ListItemIcon></ListItemIcon>
                      <ListItemText primary={menu.pageName} />
                      {menu.accordion ? (
                        expanded == menu.pageName ? (
                          <ExpandLessIcon />
                        ) : (
                          <ExpandMoreIcon />
                        )
                      ) : null}
                    </ListItemButton>
                    <Collapse
                      in={expanded == menu.pageName}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List component="div" disablePadding>
                        {menu.accordion &&
                          menu.child.map((child) => {
                            return (
                              <ListItemButton
                                sx={{ pl: 4 }}
                                onClick={() => {
                                  navigate(child.pagePath);
                                }}
                              >
                                <ListItemIcon>
                                  <FiberManualRecordIcon />
                                </ListItemIcon>
                                <ListItemText primary={child.childName} />
                              </ListItemButton>
                            );
                          })}
                      </List>
                    </Collapse>
                  </>
                );
                // !menu.accordion ? (
                //   <Button
                //     sx={{ width: "100%", minHeight: "44px", color: "white" }}
                //   >
                //     {menu.pageName}
                //   </Button>
                // ) : (
                //   <Accordion
                //     expanded={expanded == menu.pageName}
                //     onChange={handleChange(menu.pageName)}
                //     sx={{
                //       bgcolor: "#282733",
                //       color: "white",
                //       border: "none",
                //       boxShadow: "none", // Remove box shadow
                //       "&.Mui-expanded": {
                //         margin: 0, // Remove margin when expanded
                //       },
                //       "&:before": {
                //         display: "none", // Remove the default separator line
                //       },
                //     }}
                //   >
                //     <AccordionSummary
                //       expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                //     >
                //       <Typography sx={{ width: "100%", flexShrink: 0 }}>
                //         {menu.pageName}
                //       </Typography>
                //     </AccordionSummary>
                //     <AccordionDetails>
                //       <Typography>
                //         Nulla facilisi. Phasellus sollicitudin nulla et quam
                //         mattis feugiat. Aliquam eget maximus est, id dignissim
                //         quam.
                //       </Typography>
                //     </AccordionDetails>
                //   </Accordion>
                // );
              })}
            </List>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default Home;
