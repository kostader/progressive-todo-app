import { FC } from "react";
import { AddNewItem } from "./AddNewItem";
import { AppContainer } from "./styles";
import { Column } from "./Column";
import { Card } from "./Card";

export const App = () => {
  return (
    <AppContainer>
      <Column text="To do">
        <Card text="Learn FastAPI" />
      </Column>
      <Column text="In Progress">
        <Card text="Learn TypeScript" />
      </Column>
      <Column text="Done">
        <Card text="Begin to use static typing" />
      </Column>
      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
    </AppContainer>
  );
};
