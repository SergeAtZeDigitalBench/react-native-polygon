import { StoreProvider } from "./src/providers/StoreProvider";
import { AppCore } from "./src/AppCore";

export default function App() {
  return (
    <StoreProvider>
      <AppCore />
    </StoreProvider>
  );
}
