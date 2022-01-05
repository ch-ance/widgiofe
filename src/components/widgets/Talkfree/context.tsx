import { createContext, useContext } from "react";

interface WidgetContext {
  name: string;
}

const widgetContext = createContext<WidgetContext | {}>({});

interface WidgetProvider {
  widgetData: any;
  children: any;
}

export const WidgetProvider = ({ widgetData, children }: WidgetProvider) => {
  return (
    <widgetContext.Provider value={widgetData}>
      {children}
    </widgetContext.Provider>
  );
};

export const useWidgetData = () => {
  const { ...data } = useContext(widgetContext) as WidgetContext;
  return data;
};
