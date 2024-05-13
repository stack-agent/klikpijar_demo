import {
  AppBar,
  Box,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import klikpijar from "../assets/logo-default-slim.png";
import SearchIcon from "@mui/icons-material/Search";
import "../css/home.css";
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const theme = useTheme();
  const mediaQuery = useMediaQuery("(min-width: 991.5px");
  const page = [
    { name: "BERANDA", path: "/" },
    { name: "FOKUS KAMI", path: "/1" },
    { name: "ADVERS EVENT", path: "/" },
    { name: "INFO DASAR HIV", path: "/" },
    { name: "MITRA", path: "/" },
    { name: "FAQ", path: "/" },
  ];
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <AppBar position="sticky">
      <Box
        display={"flex"}
        width={"100%"}
        height={"150px"}
        alignContent={"center"}
        justifyContent={"center"}
        color={theme.palette.secondary.main}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            maxWidth: {
              xs: "100%",
              sm: "540px",
              md: "720px",
              lg: "960px",
              xl: "1140px",
            },
          }}
        >
          <Box height={"114px"} width={"305px"}>
            <IconButton href="/" disableRipple>
              <img
                className="logo-transition"
                alt="Klikpijar"
                src={klikpijar}
              />
            </IconButton>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            height={"100%"}
            width={"100%"}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"flex-end"}
              height={"50%"}
              gap={"10px"}
            >
              <Button
                size="small"
                className="about-us"
                disableRipple
                sx={{ color: "#afaca9", textTransform: "none" }}
              >
                <Box
                  className="right-arrow"
                  display={"flex"}
                  alignItems={"center"}
                >
                  <ChevronRightIcon fontSize="" />
                </Box>
                Tentang Kami
              </Button>
              <Box
                display={"flex"}
                justifyContent={"flex-end"}
                borderLeft={"solid 1px #fafafa"}
                width={"30px"}
              >
                <SearchIcon sx={{ color: "black", fontSize: "20px" }} />
              </Box>
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"flex-end"}
              height={"50%"}
              gap={"10px"}
            >
              {mediaQuery ? (
                page.map((page) => (
                  <Button
                    className="navbar-buttons"
                    key={page.path}
                    onClick={() => {
                      navigate(`${page.path}`);
                    }}
                    sx={{
                      fontWeight: 600,
                      color:
                        location.pathname === page.path ? "white" : "inherit",
                      bgcolor:
                        location.pathname === page.path ? "#4c7c9e" : "inherit",
                    }}
                  >
                    {page.name}
                  </Button>
                ))
              ) : (
                <Box>
                  {/* <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                  </Menu> */}
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Home;
