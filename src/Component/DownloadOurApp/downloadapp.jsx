import mobile from "../../assets/image 2.png";
import playstore from "../../assets/google_play.png";
import apple from "../../assets/apple_store.png";
import arrow from "../../assets/Vector.png";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import SmsForm from "./smsForm";
import styles from "./download.module.css"; // Importing the CSS module

// Download app component to render input details using SmsForm component
export default function DownloadApp() {
  return (
    <Box
      sx={{ background: "linear-gradient(#E7F0FF 100%, #E8F1FF 47%)", pt: 5 }}
    >
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={5.5}>
            <Box src={mobile} component="img" width={1} height="auto" alt="Mobile phone" />
          </Grid>

          <Grid item xs={12} md={6.5}>
            <Box
              position="relative"
              pl={{ xs: "36px", md: "50px" }}
              mb={{ xs: 4, md: 0 }}
              className={styles.box}
            >
              <Typography variant="h2" mb={2}>
                Download the
                <br />
                <Box component="span" color="primary.main">
                  Medify{" "}
                </Box>
                App
              </Typography>

              <Box
                src={arrow}
                component="img"
                width={{ xs: 24, md: 40 }}
                position="absolute"
                left={0}
                top={50}
                className={styles.arrow}
                alt=""
              />

              <SmsForm />

              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={{ xs: 1, md: 2 }}
                className={styles.stack}
              >
                <Button
                  sx={{
                    bgcolor: "#333",
                    color: "#fff",
                    py: 1.5,
                    borderRadius: 1.5,
                  }}
                  size={"large"}
                  startIcon={<img src={playstore} height={24} alt="Google Play Store" />}
                  variant="contained"
                  disableElevation
                >
                  Google Play
                </Button>
                <Button
                  sx={{
                    bgcolor: "#333",
                    color: "#fff",
                    py: 1.5,
                    borderRadius: 1.5,
                  }}
                  size="large"
                  startIcon={<img src={apple} height={24} alt="Apple App Store" />}
                  variant="contained"
                  disableElevation
                >
                  App Store
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
