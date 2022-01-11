import { Box } from "@mui/material";

interface WidgetContainerProps extends React.ComponentProps<React.FC> {}

const WidgetContainer = (props: WidgetContainerProps) => {
  return (
    <Box
      border="thin solid"
      borderColor="primary.main"
      height="100%"
      borderRadius="5px"
    >
      {props.children}
    </Box>
  );
};

export default WidgetContainer;
