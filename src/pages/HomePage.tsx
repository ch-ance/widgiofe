import Page, { Grid, GridColumn } from "@atlaskit/page";
import Header from "../components/molecules/Header";
const HomePage = () => {
  return (
    <Page testId="home-page">
      <Grid testId="home-page-grid">
        <GridColumn medium={12}>
          <Header title="WidgyMa Dashboard" />
        </GridColumn>
        <GridColumn medium={8}></GridColumn>
        <GridColumn medium={4}></GridColumn>
        <GridColumn></GridColumn>
      </Grid>
    </Page>
  );
};

export default HomePage;
