import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PokeRouters } from "./routers/PokeRouters";
import { DataPokeProvider } from "./context/data-poke-context/DataPokeProvider";

const queryClient = new QueryClient()

export const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <DataPokeProvider>
        <PokeRouters />
        <ReactQueryDevtools initialIsOpen={false} />
      </DataPokeProvider>
    </QueryClientProvider>
  )
}
