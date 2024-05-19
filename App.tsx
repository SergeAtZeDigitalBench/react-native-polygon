import { StoreProvider } from "./src/providers/StoreProvider";
import { TODO_LIST } from "./src/constants";
import { AppCore } from "./src/AppCore";

export default function App() {
  return (
    <StoreProvider initialTodos={TODO_LIST}>
      <AppCore />
    </StoreProvider>
  );
}
