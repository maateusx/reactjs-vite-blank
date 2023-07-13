import { Suspense, lazy, FC } from "react";
import { Routes, Route } from "react-router-dom";
import { CircularProgress, Grid } from "@mui/material";

import Text from "atoms/Text";
import Theme from "style/Theme";

const MainScreen = lazy(() => import("pages/main"));

const MainRoutes: FC = () => {
  return (
    <div
      style={{
        flex: 1,
        minHeight: "100vh",
        width: "100%",
        backgroundColor: Theme.background,
      }}
    >
      <Suspense
        fallback={
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            direction="column"
            style={{ flex: 1, padding: 25, height: "100vh" }}
          >
            <CircularProgress />
            <Text style={{ marginTop: 25 }} bold size={16}>
              Carregado...
            </Text>
          </Grid>
        }
      >
        <Routes>
          <Route path="*" element={<MainScreen />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default MainRoutes;
