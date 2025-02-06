import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PokeRouters } from "./routers/PokeRouters";

const queryClient = new QueryClient()

export const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <PokeRouters />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
